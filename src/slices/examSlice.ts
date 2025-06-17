/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { questionData } from "@/data/questionData";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//
// ── INTERFACES ────────────────────────────────────────────────────────────────
//

export interface ExamOption {
  id: string;
  value: string;
}

export interface ExamQuestion {
  id: string;
  question: string;
  options: ExamOption[];
  correctAnswerId: string;
  selectedAnswerId?: string;
}

export interface ExamState {
  studentId: number | null;
  examId: number | null;
  isAuthenticated: boolean;
  currentPageIndex: number;
  examQuestions: ExamQuestion[];
  loading: boolean;
  error?: string;
  timeRemaining: number; // in seconds
  submitted: boolean;
  score?: number;
}

//
// ── UTILS ──────────────────────────────────────────────────────────────────────
//

const computeScore = (questions: ExamQuestion[]) =>
  questions.reduce(
    (acc, q) => (q.selectedAnswerId === q.correctAnswerId ? acc + 1 : acc),
    0
  );

//
// ── INITIAL STATE ─────────────────────────────────────────────────────────────
//

const initialState: ExamState = {
  studentId: null,
  examId: null,
  isAuthenticated: false,
  currentPageIndex: 0,
  examQuestions: [],
  loading: false,
  error: undefined,
  timeRemaining: 60 * 60,
  submitted: false,
  score: undefined,
};

//
// ── ASYNC THUNKS ───────────────────────────────────────────────────────────────
//

// 1) Login: fetch all questions
export const loginExam = createAsyncThunk<
  { studentId: number; questions: ExamQuestion[]; examId: number },
  { studentId: number; password: string; examId: number },
  { rejectValue: string }
>("exam/loginExam", async ({ studentId, examId, password }, thunkAPI) => {
  try {
    const response = await axios.post(
      process.env.NEXT_PUBLIC_FRONTEND_URL + "/api/cmsserver/studentexamlogin",
      {
        payload: {
          student_id: studentId,
          exam_id: examId,
          dbname: process.env.NEXT_PUBLIC_DATABASE_NAME?.toString(),
          password: password,
        },
      }
    );

    const data: Array<{
      qno: number;
      questionname: string;
      options: { id: string; value: string }[];
      correct: string;
    }> = response.data.payload;

    const questions: ExamQuestion[] = data.map((q) => ({
      id: `Q${q.qno}`,
      question: q.questionname,
      options: q.options.map((opt) => ({
        id: opt.id,
        value: opt.value,
      })),
      correctAnswerId: q.correct,
      selectedAnswerId: undefined,
    }));

    return { studentId, examId, questions };
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "Login failed";
    return thunkAPI.rejectWithValue(message);
  }
});

// 2) Submit: send answers to backend
export const submitAnswers = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string }
>("exam/submitAnswers", async (_, thunkAPI) => {
  const state = (thunkAPI.getState() as { exam: ExamState }).exam;
  const { studentId, examQuestions, examId } = state;

  if (!studentId || !examId) {
    return thunkAPI.rejectWithValue("Not found studentId or examId");
  }

  const dbname = process.env.NEXT_PUBLIC_DATABASE_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;

  if (!dbname || !apiUrl) {
    return thunkAPI.rejectWithValue("Missing environment variables");
  }

  const score = computeScore(examQuestions);

  try {
     const response = await axios.post(
       apiUrl + "/api/cmsserver/studentexamsubmit",
     {
      payload:{
      student_id: studentId,
      exam_id: examId,
      score,
      dbname,
    }
     }
    );
    return response.data;
  } catch (err: any) {
    console.error("Submit error", err.response?.data || err);
    const message =
      err.response?.data?.message || err.message || "Submission failed";
    return thunkAPI.rejectWithValue(message);
  }
});

// 3) Force Submit: dispatches submitAnswers
export const forceSubmit = createAsyncThunk<
  { message: string; forced: boolean },
  void,
  { rejectValue: string }
>("exam/forceSubmit", async (_, thunkAPI) => {
  try {
    const resultAction = await thunkAPI.dispatch(submitAnswers());

    if (submitAnswers.fulfilled.match(resultAction)) {
      return { ...resultAction.payload, forced: true };
    }

    const error = resultAction.payload || "Forced submission failed";
    return thunkAPI.rejectWithValue(error as string);
  } catch (error: any) {
    const message = error?.message || "Unexpected forced submission error";
    return thunkAPI.rejectWithValue(message);
  }
});

//
// ── SLICE ──────────────────────────────────────────────────────────────────────
//

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    selectAnswer(
      state,
      action: PayloadAction<{ questionId: string; answerId: string }>
    ) {
      const { questionId, answerId } = action.payload;
      const question = state.examQuestions.find((q) => q.id === questionId);
      if (question) {
        question.selectedAnswerId = answerId;
      }
    },

    nextPage(state) {
      const maxPageIndex = Math.floor((state.examQuestions.length - 1) / 10);
      if (state.currentPageIndex < maxPageIndex) {
        state.currentPageIndex += 1;
      }
    },

    prevPage(state) {
      if (state.currentPageIndex > 0) {
        state.currentPageIndex -= 1;
      }
    },

    tickTimer(state) {
      if (state.timeRemaining > 0) {
        state.timeRemaining -= 1;
      }
    },

    resetExam: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      // loginExam
      .addCase(loginExam.pending, (state) => {
        state.submitted = false;
        state.loading = true;
        state.error = undefined;
      })
      .addCase(loginExam.fulfilled, (state, action) => {
        const { studentId, questions, examId } = action.payload;
        state.loading = false;
        state.studentId = studentId;
        state.examId = examId;
        state.isAuthenticated = true;
        state.examQuestions = questions; 
        state.currentPageIndex = 0;
        state.timeRemaining = 60 * 60;
        state.submitted = false;
        state.score = undefined;
        state.error = undefined;
      })
      .addCase(loginExam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // submitAnswers
      .addCase(submitAnswers.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(submitAnswers.fulfilled, (state, action) => {
        state.loading = false;
        state.score = computeScore(state.examQuestions);
        state.submitted = true;
        state.error = undefined;
      })
      .addCase(submitAnswers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectAnswer, nextPage, prevPage, tickTimer, resetExam } =
  examSlice.actions;

export default examSlice.reducer;
