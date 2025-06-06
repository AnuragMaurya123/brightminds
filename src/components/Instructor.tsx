"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
          arrows={false}
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
