import type React from "react"
import Image from "next/image"
import type { TopperStudent } from "@/constant"

const TopperStudentCard: React.FC<{ student: TopperStudent }> = ({ student }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 p-6">
      {/* Student Photo */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-200 group-hover:border-orange-400 transition-colors duration-300">
          <Image
            src={student.image || "/placeholder.svg"}
            alt={student.name}
            width={96}
            height={96}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Student Info */}
      <div className="text-center space-y-3">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
          {student.name}
        </h3>

        {/* Standard */}
        <p className="text-orange-600 font-medium">{student.standard}</p>

        {/* Marks */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4">
          <div className="text-3xl font-bold text-gray-800">{student.marks} %</div>
          <div className="text-sm text-gray-600">Total Percentage</div>
        </div>
      </div>
    </div>
  )
}

export default TopperStudentCard
