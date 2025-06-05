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
    <section className="relative w-full h-screen max-h-[90vh] overflow-hidden bg-black">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        showDots={false}
        arrows={true} // you can set false and add custom arrows if you want
        containerClass="h-full"
        itemClass="h-full"
        customTransition="all 0.5s ease-in-out"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={1200}       // set natural image size
                height={600}
                layout="responsive"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8 z-20">
              <FlipText className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-orange-400 drop-shadow-lg mb-4 max-w-[90%] sm:max-w-2xl">
                {slide.title}
              </FlipText>
              <FlipText className="text-xs sm:text-base md:text-lg lg:text-xl text-white drop-shadow-md max-w-[90%] sm:max-w-xl">
                {slide.subtitle}
              </FlipText>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
