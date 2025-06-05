import React from 'react';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Testimonial } from '@/constant';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const filledStars = Array.from({ length: testimonial.rating });
  const emptyStars = Array.from({ length: 5 - testimonial.rating });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 text-center h-full flex flex-col justify-between">
      <div className="flex justify-center mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={200}
          height={80}
          className="rounded-xl border-4 border-amber-500"
        />
      </div>

      {/* Message */}
      <p className="text-gray-600 italic mb-6">&quot;{testimonial.message}&quot;</p>

      {/* Stars */}
      <div className="flex justify-center mb-4">
        {filledStars.map((_, i) => (
          <Star key={`filled-${i}`} size={18} className="text-amber-500 fill-amber-500" />
        ))}
        {emptyStars.map((_, i) => (
          <Star key={`empty-${i}`} size={18} className="text-gray-300" />
        ))}
      </div>

      {/* Name & Role */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
        <p className="text-sm text-amber-600">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
