"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CoursesCardProps } from "@/constant"
import { Clock, Users } from "lucide-react"

export default function CoursesCard({ id, title, description, image }: CoursesCardProps) {
  return (
    <Card className="h-[480px] flex flex-col shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-105 will-change-transform bg-white border-0">
      {/* Image with overlay */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
          loading="lazy"
          draggable={false}
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Course badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Course #{id}</span>
        </div>

       
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
            {title}
          </CardTitle>
        </CardHeader>

        {/* Description */}
        <CardContent className="p-0 flex-1 flex flex-col">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">{description}</p>

          {/* Course stats */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>8 weeks</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>1.2k students</span>
            </div>
          </div>
        </CardContent>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </Card>
  )
}
