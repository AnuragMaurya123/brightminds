"use client";

import { RootState } from "@/store";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
import { useSelector } from "react-redux"; // Uncomment and configure when ready

type PageCoverProps = {
  children: ReactNode;
};

export default function Layout({ children }: PageCoverProps) {

  const isAuthenticated = useSelector((state: RootState) => state.exam.isAuthenticated);

  if (!isAuthenticated) {
    return redirect("/exams")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {children}
    </div>
  );
}
