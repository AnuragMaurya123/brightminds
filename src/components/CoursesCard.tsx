"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CoursesCardProps } from "@/constant";

export default function CoursesCard({ id, title, description, image }: CoursesCardProps) {
  return (
    <Card
      key={id}
      className="h-[500px] flex flex-col shadow-xl rounded-2xl overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-2xl will-change-transform"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105 will-change-transform"
          loading="lazy"
          draggable={false}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Card Header */}
      <CardHeader>
        <CardTitle className="text-xl sm:text-md font-bold text-amber-600 group-hover:text-amber-700 transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="px-4 sm:px-5 pt-0 text-sm sm:text-base text-gray-700 flex-1">
        <p className="line-clamp-4">{description}</p>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="p-4 sm:p-5 bg-white">
        <Button
          variant="outline"
          className="w-full text-sm sm:text-base font-medium hover:bg-amber-50 hover:text-amber-600 transition"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
