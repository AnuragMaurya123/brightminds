import Image from 'next/image';
import React from 'react';
import { BookOpen, Video, Users, Smile } from 'lucide-react'; // Icons from lucide-react
import StatCard from './StatCard';

export default function AboutUs() {
  return (
    <section className="max-w-7xl mb-5 mx-auto px-6 py-18 flex flex-col md:flex-row gap-12 items-center justify-between">

      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[500px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="https://themewagon.github.io/Edukate/img/about.jpg"
          fill
          alt="About Us"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <span className="text-md  text-orange-500 uppercase font-bold tracking-wide">About Us</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          First Choice For Online Education Anywhere
        </h2>
        <p className="text-gray-600 text-base">
          Tempor erat elitr at rebum at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-8">
          <StatCard icon={<BookOpen size={28} />} label="Available Subjects" value={120} />
          <StatCard icon={<Video size={28} />} label="Online Courses" value={85} />
          <StatCard icon={<Users size={28} />} label="Skilled Instructors" value={45} />
          <StatCard icon={<Smile size={28} />} label="Happy Students" value={2300} />
        </div>
      </div>
    </section>
  );
}


