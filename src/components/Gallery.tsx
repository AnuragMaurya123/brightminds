"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Gallery() {
  const [url, setUrl] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const seenItems = useRef<Set<number>>(new Set());

  const gallerys = Array.from({ length: 6 }, (_, i) => ({
    url: `/gallery/${i + 1}.jpg`,
    alt: `Photo ${i + 1}`,
  }));

  // Open modal with clicked image
  const handleViewImage = (url: string) => {
    setUrl(url);
    setOpen(true);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Observe images on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !seenItems.current.has(index)) {
            seenItems.current.add(index);
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="Gallery" className="py-10 bg-white mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 space-y-2">
          <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Learn from experienced professionals who are passionate about teaching.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallerys.map((gallery, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) itemRefs.current[i] = el;
              }}
              onClick={() => handleViewImage(gallery.url)}
              className={`transition-all duration-700 ease-out transform cursor-pointer overflow-hidden rounded-lg shadow
              ${visibleItems.includes(i) ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
            >
              <Image
                src={gallery.url}
                alt={gallery.alt}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {open && (
        <>
          <div className="fixed inset-0 bg-black/80 z-50" />
          <div className="fixed inset-0 flex justify-center items-center z-50 p-4 overflow-hidden">
            <div className="relative max-w-4xl w-full" style={{ height: "80vh" }}>
              <Image
                src={url}
                alt="Expanded Image"
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
              <X
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white cursor-pointer w-8 h-8"
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
}
