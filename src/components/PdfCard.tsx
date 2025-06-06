import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { PdfNoteProps } from "@/constant";
import Link from "next/link";

export default function PdfCard({ lesson, noteTitle, pdfUrl }: PdfNoteProps) {
  return (
    <Card className="group shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between h-full pt-4 border border-gray-200 transition-transform hover:scale-[1.02] hover:shadow-xl duration-300">
      <CardHeader className="space-y-1">
        <p className="text-sm  flex items-start gap-2 "><BookOpenCheck className="text-amber-600"/> Lesson: <span className="font-medium text-gray-800">{lesson}</span></p>
        <p className="text-base font-semibold text-gray-900">{noteTitle}</p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="border border-gray-300 rounded-lg overflow-hidden h-[180px] transition-all duration-300 group-hover:border-amber-600">
          <iframe
            src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
            title="PDF Preview"
            className="w-full h-full rounded-md"
          />
        </div>
      </CardContent>

      <div className="px-4 pb-4">
        <Button asChild className="w-full bg-amber-600 hover:bg-amber-700 transition text-white font-semibold text-sm tracking-wide">
          <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
            View & Download PDF <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
