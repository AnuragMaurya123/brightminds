"use client";

import React, { useEffect, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  selectAnswer,
  submitAnswers,
  tickTimer,
  nextPage,
  prevPage,
  forceSubmit,
} from "@/slices/examSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";

/* ───────────────────────── utils ───────────────────────── */
const createSchema = (ids: string[], isFinal: boolean) =>
  z.object(
    Object.fromEntries(
      ids.map((id) => [
        id,
        isFinal ? z.string().min(1, "Required") : z.string().optional(),
      ])
    )
  );

/* ───────────────────────── component ───────────────────────── */
export default function QuestionsPage() {
  const dispatch = useAppDispatch()
    const { examQuestions, currentPageIndex, timeRemaining, submitted, score } = useAppSelector(state => state.exam)
    const mm = Math.floor(timeRemaining / 60).toString().padStart(2, '0')
    const ss = (timeRemaining % 60).toString().padStart(2, '0')

    // Pagination setup
    const perPage = 10;
    const totalPages = Math.ceil(examQuestions.length / perPage);
    const start = currentPageIndex * perPage;

    // If submitted, show all questions. Otherwise, only the current page.
    const currentQs = submitted
      ? examQuestions
      : examQuestions.slice(start, start + perPage);

    // Collect question IDs on this page
    const questionids = currentQs.map((q) => q.id);
    const isFinalPage = currentPageIndex === totalPages - 1;

    //
    const initialDefaults = useMemo(
      () =>
        Object.fromEntries(
          currentQs.map((q) => [q.id, q.selectedAnswerId || ""])
        ),
      [currentQs]
    );

    // Create Zod schema dynamically
    const schema = useMemo(
      () => createSchema(questionids, isFinalPage),
      [questionids, isFinalPage]
    );

    const form = useForm<Record<string, string | undefined>>({
      resolver: zodResolver(schema),
      defaultValues: initialDefaults,
      mode: "onChange", // so we can disable the Next/Submit button if invalid
    });
    const { isValid } = form.formState;

    // Keep track of previous defaults to avoid infinite resets
    const prevDefaultsRef = useRef<Record<string, string> | null>(null);
    useEffect(() => {
      const defaults = Object.fromEntries(
        currentQs.map((q) => [q.id, q.selectedAnswerId || ""])
      );
    
      const prev = prevDefaultsRef.current;
      const changed = !prev || Object.keys(defaults).some((key) => prev[key] !== defaults[key]);
    
      if (changed) {
        form.reset(defaults);
        prevDefaultsRef.current = defaults;
      }
    }, [currentQs, form]);
    

    // Scroll to top whenever page index changes
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPageIndex]);

    // Tick the timer every second (until submitted)
    useEffect(() => {
      if (submitted) return;
      const interval = setInterval(() => dispatch(tickTimer()), 1000);
      return () => clearInterval(interval);
    }, [submitted, dispatch]);

    // When timeRemaining reaches 0, dispatch forceSubmit
    useEffect(() => {
      if (timeRemaining <= 0 && !submitted) {
        dispatch(forceSubmit())
          .unwrap()
          .then(() => {
            toast.info("Time is up! Your exam was submitted automatically.");
          })
          .catch(() => {
            toast.error("Failed to auto-submit exam. Please Login again.");
          });
      }
    }, [timeRemaining, submitted, dispatch]);

    // Save answers to Redux, skipping empty strings
    const saveCurrentAnswers = () => {
      const values = form.getValues();
      Object.entries(values).forEach(([qid, ans]) => {
        if (ans && ans !== "") {
          dispatch(selectAnswer({ questionId: qid, answerId: ans }));
        }
      });
    };

    const handlePrev = () => {
      if (currentPageIndex === 0) return;
      saveCurrentAnswers();
      dispatch(prevPage());
    };

    // Submit handler: either Next Page or final submit
    const onSubmit = (values: Record<string, string | undefined>) => {
      Object.entries(values).forEach(([qid, ans]) => {
        if (ans && ans !== "") {
          dispatch(selectAnswer({ questionId: qid, answerId: ans }));
        }
      });

      if (currentPageIndex < totalPages - 1) {
        dispatch(nextPage());
      } else {
        dispatch(submitAnswers())
          .unwrap()
          .then((res) => {
            toast.success(res.message || "Exam submitted successfully!");
          })
          .catch((err) => {
            console.log(err);
            
            toast.error(err?.message || "Error submitting exam. Please try again.");
          });

      }
    };

    // If validation fails on the final page
    const onError = (errors: any) => {
      console.log("Validation errors:", errors);
      toast.error("Please answer all required questions before submitting.");
    };

  /* ───────────────────────── render ───────────────────────── */
  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Timer */}
      {!submitted && (
        <div className="sticky top-0 z-10 flex justify-between items-center bg-white border border-gray-200 p-4 rounded-xl shadow-md">
          <span className="text-sm font-semibold text-gray-700">⏱ Time Left:</span>
          <span className="px-4 py-1 rounded-full bg-amber-100 text-amber-700 font-mono text-lg">
            {mm}:{ss}
          </span> 
        </div>
      )}

      {/* Score */}
      {submitted && (
        <p className="text-center text-xl font-semibold text-green-700">
          🎉 You scored {score} / {examQuestions.length}
        </p>
      )}

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {currentQs.map((q, i) => (
            <FormField
              key={q.id}
              control={form.control}
              name={q.id}
              render={({ field }) => {
                const correct = q.correctAnswerId;
                const selected = q.selectedAnswerId;

                return (
                  <FormItem className="space-y-4 p-6 border border-gray-200 bg-white rounded-xl shadow-sm">
                    <FormLabel className="block font-bold text-xl text-amber-600">
                      {(submitted ? i : start + i) + 1}. {q.question}
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        {q.options.map((opt) => {
                          const isCorr = opt.id === correct;
                          const isSel = opt.id === selected;

                          let bg =
                            "hover:bg-gray-100 border-gray-300 cursor-pointer";
                          if (submitted) {
                            if (isCorr) bg = "bg-green-100 border-green-500";
                            else if (isSel) bg = "bg-red-100 border-red-500";
                            else bg = "bg-white border-gray-200";
                          } else if (field.value === opt.id) {
                            bg = "bg-amber-100 border-amber-500";
                          }

                          return (
                             <FormItem
                              key={opt.id}
                              className={`flex items-center space-x-4 rounded-lg p-3 border transition-colors duration-200 ${bg}`}
                            >
                              <FormControl>
                                <RadioGroupItem
                                  value={opt.id}
                                  disabled={submitted}
                                  className="border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600 transition relative"
                                >
                                  {/* Indicator is auto-mounted by Radix — just make sure it looks like a filled dot */}
                                  {/* If you're using a custom indicator, ensure it's styled properly */}
                                </RadioGroupItem>
                              </FormControl>
                              <FormLabel className="font-medium text-gray-700 cursor-pointer">
                                {opt.value}
                              </FormLabel>
                            </FormItem>

                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                );
              }}
            />
          ))}

          {/* Footer buttons */}
          {!submitted ? (
            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                type="button"
                onClick={handlePrev}
                disabled={currentPageIndex === 0}
                className="w-28"
              >
                ← Previous
              </Button>
              <Button
                type="submit"
                disabled={!isValid}
                className="w-36 bg-amber-600 text-white hover:bg-amber-700 font-semibold"
              >
                {currentPageIndex < totalPages - 1 ? "Next →" : "Submit Answers"}
              </Button>
            </div>
          ) : (
            <Link
              href="/"
              className="inline-block w-36 bg-amber-600 text-white text-center py-2 rounded-md font-semibold"
            >
              Go Home
            </Link>
          )}
        </form>
      </Form>
    </div>
  );
}
