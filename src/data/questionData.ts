import { ExamQuestion } from "@/slices/examSlice";

export const questionData: ExamQuestion[] = Array.from({ length: 100 }, (_, i) => {
  const qNum = i + 1;

  return {
    id: `Q${qNum}`,
    question: `What is the answer to question ${qNum}?`,
    options: [
      { id: "A", value: `Option A for Q${qNum}` },
      { id: "B", value: `Option B for Q${qNum}` },
      { id: "C", value: `Option C for Q${qNum}` },
      { id: "D", value: `Option D for Q${qNum}` },
    ],
    correctAnswerId: "A", // All correct answers default to "A" for testing
    selectedAnswerId: undefined,
  };
});
