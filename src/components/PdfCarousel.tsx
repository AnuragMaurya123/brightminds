"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { pdfNotes } from "@/constant";
import PdfCard from "./PdfCard";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 3 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, partialVisibilityGutter: 40 },
};


export default function PdfCarousel() {
  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {pdfNotes.map((data, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-6 border-l-4 border-amber-600 pl-4">
              {data.subject} Notes
            </h2>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              keyBoardControl
              pauseOnHover
              showDots={false}
              arrows={false} 
              itemClass="px-3 pb-4"
              containerClass="relative"
              partialVisible
            >
              {data.notes.map((note, i) => (
                <div
                  key={i}
                  className="transition-all transform hover:-translate-y-2 hover:shadow-xl duration-300"
                >
                  <PdfCard
                    lesson={note.lesson}
                    noteTitle={note.noteTitle}
                    pdfUrl={note.pdfUrl}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </div>
  );
}
