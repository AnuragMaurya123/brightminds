'use client';

import React, { useRef } from 'react';
import { FlickeringGrid } from './magicui/flickering-grid';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <div className="relative overflow-hidden">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#f54a00"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={800}
        width={1920}
      />

      {/* Main Content Section */}
      <section ref={ref} className="relative  z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 items-center justify-between">

        {/* Left: Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full md:w-1/2 space-y-6 text-black"
        >
          <span className="inline-block bg-orange-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest rounded-full shadow-md">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black drop-shadow-xl">
            First Choice For Online Education Anywhere
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            We provide expert-crafted courses tailored to your success. Whether it&apos;s academic growth or career transformation, our platform empowers you with the tools to thrive in the digital world.
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-3">
              ✅ Career-focused curriculum
            </li>
            <li className="flex items-center gap-3">
              ✅ World-class instructors
            </li>
            <li className="flex items-center gap-3">
              ✅ Flexible & affordable programs
            </li>
          </ul>
        </motion.div>


        {/* Right: Text */}

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full md:w-1/2 h-[500px] rounded-xl overflow-hidden shadow-xl"
        >
          <Image
            src="/person1.webp"
            fill
            alt="Why Choose Us"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
        </motion.div>
      </section>
    </div>
  );
}
