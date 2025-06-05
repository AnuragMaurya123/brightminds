"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Gallery() {
    const [url, setUrl] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const gallerys = [
        { url: "/gallery/1.jpg", alt: "photo 1" },
        { url: "/gallery/2.jpg", alt: "photo 2" },
        { url: "/gallery/3.jpg", alt: "photo 3" },
        { url: "/gallery/4.jpg", alt: "photo 4" },
        { url: "/gallery/5.jpg", alt: "photo 4" },
        { url: "/gallery/6.jpg", alt: "photo 4" },
    ];

    // Open modal with clicked image
    const handleViewImage = (url: string) => {
        setUrl(url);
        setOpen(true);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1 && !visibleItems.includes(index)) {
                            // Add index only if not already included
                            setVisibleItems((prev) => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        itemRefs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, [visibleItems]);

    return (
        <section id="Gallery" className="py-20 bg-white">
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
                            className={`cursor-pointer overflow-hidden rounded-lg shadow transition-transform duration-700 ease-out transform
        ${visibleItems.includes(i) ? "scale-100 opacity-100" : "scale-75 opacity-0"}
      `}
                        >
                            {/* Thumbnail images with fixed width/height for optimization */}
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
                <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
                    <div
                        className="relative max-w-4xl w-full"
                        style={{ height: "80vh" }} // fix height for 'fill' to work
                    >
                        <Image
                            src={url}
                            alt="Expanded Image"
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-lg"
                            unoptimized
                        />
                        <X
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-white cursor-pointer w-8 h-8"
                        />
                    </div>
                </div>
            )}

        </section>
    );
}
