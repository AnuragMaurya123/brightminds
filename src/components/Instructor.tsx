"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import InstructorCard from "./InstructorCard";
import { instructorsData } from "@/constant";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

// Custom Arrow Components that ignore carouselState
const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-amber-600 p-2 px-5 py-5 shadow transition group hover:bg-gray-100"
  >
    <ChevronLeft size={24} className="text-white transition group-hover:text-amber-600" />
  </div>
);

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-amber-600 p-2 px-5 py-5 shadow transition group hover:bg-gray-100"
  >
    <ChevronRight size={24} className="text-white transition group-hover:text-amber-600" />
  </div>
);

export default function Instructor() {
  return (
    <section id="instructors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-2">
          <span className="text-md text-orange-500 uppercase font-bold tracking-wide">
            Instructors
          </span>
          <h2 className="text-4xl font-bold text-gray-800">Meet Our Instructors</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from experienced professionals who are passionate about teaching.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2500}
          keyBoardControl
          pauseOnHover
          showDots={false}
          arrows
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          itemClass="px-3 pb-4"
          containerClass="pb-8"
          partialVisible
        >
          {instructorsData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
