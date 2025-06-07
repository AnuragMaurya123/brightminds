"use client"

import { useRef } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { topperStudents } from "@/constant"
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react"
import TopperStudentCard from "./TopperStudentCard"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
}

const TopperStudentsCarousel = () => {
  const carouselRef = useRef<Carousel>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-orange-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-sm text-orange-500 uppercase font-bold tracking-wider bg-orange-100 px-4 py-2 rounded-full flex items-center gap-2">
              <Trophy size={16} />
              Top Students
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            Our High Achievers
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating our students who have achieved excellent marks in their examinations
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => carouselRef.current?.previous(1)}
            className="group p-4 bg-white border-2 border-orange-200 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => carouselRef.current?.next(1)}
            className="group p-4 bg-white border-2 border-orange-200 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel */}
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={4000}
          showDots={false}
          arrows={false}
          itemClass="px-4 py-2"
          containerClass="pb-8"
        >
          {topperStudents.map((student) => (
            <div key={student.id} className="transition-all transform hover:-translate-y-2 duration-300">
              <TopperStudentCard student={student} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default TopperStudentsCarousel
