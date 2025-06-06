'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { slides } from '@/constant';
import { FlipText } from '@/components/magicui/flip-text';
import Image from 'next/image';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={false}
        autoPlaySpeed={4000}
        showDots={false}
        arrows={true}
        containerClass="h-full"
        itemClass="h-full"
        customTransition="all 0.5s ease-in-out"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative w-full h-[400px] sm:h-[700px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 z-20">
              <FlipText className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-lg mb-3 sm:mb-4">
                {slide.title}
              </FlipText>
              <FlipText className="text-sm sm:text-base md:text-lg lg:text-xl text-white drop-shadow-md">
                {slide.subtitle}
              </FlipText>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
