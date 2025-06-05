'use client';

import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '@/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const TestimonialCarousel = () => {
  const carouselRef = useRef<Carousel>(null);

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-2">
          <span className="text-md text-orange-500 uppercase font-bold tracking-wide">
            Instructors
          </span>
          <h2 className="text-4xl font-bold text-gray-800">What Our Learners Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from experienced professionals who are passionate about teaching.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mb-6 gap-4">
          <button
            onClick={() => carouselRef.current?.previous(1)}
            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
          >
           <ChevronLeft/>
          </button>
          <button
            onClick={() => carouselRef.current?.next(1)}
            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
          >
          <ChevronRight/>
          </button>
        </div>

        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          showDots={false}
          arrows={false} // disable default arrows, since we have custom
          itemClass="px-4"
        >
          {testimonialsData.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
