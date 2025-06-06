"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

export default function Gallery() {
  const [url, setUrl] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const seenItems = useRef<Set<number>>(new Set())

  const gallerys = Array.from({ length: 6 }, (_, i) => ({
    url: `/gallery/${i + 1}.jpg`,
    alt: `Photo ${i + 1}`,
  }));

  // Open modal with clicked image
  const handleViewImage = (url: string) => {
    setUrl(url)
    setOpen(true)
  }

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [open])

  // Observe images on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (entry.isIntersecting && !seenItems.current.has(index)) {
            seenItems.current.add(index)
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="Gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Our Gallery
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover moments of beauty and inspiration through our carefully curated collection of stunning photography
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallerys.map((gallery, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) itemRefs.current[i] = el
              }}
              onClick={() => handleViewImage(gallery.url)}
              className={`group relative transition-all duration-700 ease-out transform cursor-pointer
              ${visibleItems.includes(i) ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-2">
                {/* Image container with fixed aspect ratio */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={gallery.url || "/placeholder.svg"}
                    alt={gallery.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Simple overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/90 backdrop-blur-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn size={24} className="text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>

      {/* Enhanced Fullscreen Image Modal */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 transition-opacity duration-300"
            onClick={() => setOpen(false)}
          />

          {/* Modal content */}
          <div className="fixed inset-0 flex justify-center items-center z-50 p-4">
            <div className="relative max-w-6xl w-full max-h-[90vh]">
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/20 text-black hover:bg-white/30 backdrop-blur-sm transition-all duration-200"
              >
                <X size={24} />
              </button>

              {/* Image container */}
              <div className="relative aspect-[16/10] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={url || "/placeholder.svg"}
                  alt="Expanded Image"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>

             
            </div>
          </div>
        </>
      )}
    </section>
  )
}
