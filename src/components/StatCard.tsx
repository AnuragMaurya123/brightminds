"use client"

import type React from "react"
import { NumberTicker } from "./magicui/number-ticker"
interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: number
}

export default function StatCard({ icon, label, value }: StatCardProps) {

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        {/* Icon */}
        <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        {/* Value */}
        <div className="text-3xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
          <NumberTicker value={value}/>
          {label.includes("Students") && "+"}
        </div>

        {/* Label */}
        <div className="text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors">{label}</div>
      </div>

      {/* Bottom accent */}
      <div className="mt-4 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
    </div>
  )
}
