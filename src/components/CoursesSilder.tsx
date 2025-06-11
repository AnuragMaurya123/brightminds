"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { courses } from "@/constant"

import { ChevronLeft, ChevronRight } from "lucide-react"
import CoursesCard from "./CoursesCard"

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-orange-50 border border-orange-200"
    aria-label="Previous"
  >
    <ChevronLeft size={24} className="text-orange-600" />
  </div>
)

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-orange-50 border border-orange-200"
    aria-label="Next"
  >
    <ChevronRight size={24} className="text-orange-600" />
  </div>
)

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
    }
  }

  return (
    <main className="w-full bg-gradient-to-b from-orange-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-orange-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-orange-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-sm text-orange-500 uppercase font-bold tracking-wider bg-orange-100 px-4 py-2 rounded-full">
              Our Coaching
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
            Coaching We Offer
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our wide range of Coaching taught by industry experts. Start your learning journey today and unlock
            your potential!
          </p>
        </div>

        {/* Courses Carousel */}
        <section className="relative">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3500}
            keyBoardControl
            pauseOnHover
            showDots={true}
            arrows
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="px-4 py-2"
            containerClass="pb-8"
          >
            {courses.map((course) => (
              <div key={course.id} className="transition-all transform hover:-translate-y-2 duration-300">
                <CoursesCard
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  image={course.image}
                />
              </div>
            ))}
          </Carousel>

          
        </section>

      </div>
    </main>
  )
}
