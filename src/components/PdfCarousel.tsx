"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { pdfNotes } from "@/constant"
import { ChevronLeft, ChevronRight } from "lucide-react"
import PdfCard from "./PdfCard"


const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 3 },
  desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1, partialVisibilityGutter: 40 },
}

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-amber-50 border border-amber-200"
    aria-label="Previous"
  >
    <ChevronLeft size={24} className="text-amber-600" />
  </div>
)

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    onClick={onClick}
    className="absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-amber-50 border border-amber-200"
    aria-label="Next"
  >
    <ChevronRight size={24} className="text-amber-600" />
  </div>
)

export default function PdfCarousel() {
  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white py-16 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-amber-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-amber-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {pdfNotes.map((data, i) => (
          <div key={i} className="mb-24">
            <div className="flex items-center mb-8 group">
              <div className="w-2 h-12 bg-amber-600 rounded-full mr-4 group-hover:h-16 transition-all duration-300"></div>
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">
                  {data.subject} <span className="text-amber-600">Notes</span>
                </h2>
                <p className="text-gray-500 mt-1">Comprehensive study materials for your success</p>
              </div>
            </div>

            <div className="relative">
              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={4000}
                keyBoardControl
                pauseOnHover
                showDots={true}
                arrows
                customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />}
                itemClass="px-4 py-2"
                containerClass="pb-8"
                partialVisible
              >
                {data.notes.map((note, i) => (
                  <div key={i} className="transition-all transform hover:-translate-y-3 hover:scale-105 duration-300">
                    <PdfCard lesson={note.lesson} noteTitle={note.noteTitle} pdfUrl={note.pdfUrl} />
                  </div>
                ))}
              </Carousel>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
