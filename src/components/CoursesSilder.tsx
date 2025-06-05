"use client";

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { courses } from "@/constant";
import CoursesCard from "./CoursesCard"; // Make sure path is correct

export default function CoursesSlider() {

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
    

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 space-y-20 overflow-hidden">
      {/* Header */}
        <div className="text-center mb-14 space-y-2">
          <span className="text-md text-orange-500 uppercase font-bold tracking-wide">
            Courses
          </span>
          <h2 className="text-4xl font-bold text-gray-800">Courses We Offer </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of courses taught by industry experts. Start learning today!
          </p>
        </div>

      <section className="relative max-w-5xl mx-auto">
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
          {courses.map((course) => (
            <CoursesCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </Carousel>
      </section>
    </main>
  );
}
