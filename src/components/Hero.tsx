"use client"

import { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { slides } from "@/constant"
import { FlipText } from "@/components/magicui/flip-text"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
}

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-6 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 backdrop-blur-sm p-4 shadow-lg transition-all hover:scale-110 hover:bg-white/30 border border-white/20"
    aria-label="Previous slide"
  >
    <ChevronLeft size={28} className="text-white" />
  </div>
)

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-6 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full bg-white/20 backdrop-blur-sm p-4 shadow-lg transition-all hover:scale-110 hover:bg-white/30 border border-white/20"
    aria-label="Next slide"
  >
    <ChevronRight size={28} className="text-white" />
  </div>
)

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative w-full overflow-hidden">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots={false}
        arrows
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        containerClass="h-full"
        itemClass="h-full"
        customTransition="all 0.8s ease-in-out"
        beforeChange={(nextSlide) => setCurrentSlide(nextSlide)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Background Image */}
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Animated Background Elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-8 lg:px-12 z-20">
              <div className="max-w-5xl mx-auto space-y-6">
                {/* Main Title */}
                <FlipText
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-amber-600 drop-shadow-2xl"
                  duration={0.6}
                  delayMultiple={0.1}
                >
                  {slide.title}
                </FlipText>

                {/* Subtitle */}
                <div className="max-w-3xl mx-auto">
                  <FlipText
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 drop-shadow-lg font-light leading-relaxed"
                    duration={0.5}
                    delayMultiple={0.05}
                  >
                    {slide.subtitle}
                  </FlipText>
                </div>

              

              
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "w-8 bg-orange-500" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30 text-white/60 text-sm hidden lg:block">
        <div className="flex items-center gap-2">
          <div className="w-px h-8 bg-white/30"></div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
