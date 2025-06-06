import { FileText, Download } from "lucide-react"
import Link from "next/link"

interface PdfCardProps {
  lesson: string
  noteTitle: string
  pdfUrl: string
}

export default function PdfCard({ lesson, noteTitle, pdfUrl }: PdfCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 h-full flex flex-col">
      {/* Card header with gradient */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4 relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-bl-full"></div>
        <div className="flex items-center">
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            <FileText className="text-white" size={24} />
          </div>
          <div className="ml-3">
            <h3 className="text-white font-medium text-sm">{lesson}</h3>
            <p className="text-amber-100 text-xs">PDF Document</p>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5 flex-grow">
        <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{noteTitle}</h4>
        <p className="text-gray-500 text-sm mb-4">Complete study material with examples and practice questions</p>
         <iframe
            src={pdfUrl + "#toolbar=0&navpanes=0&scrollbar=0"}
            title="PDF Preview"
            className="w-full h-full rounded-md"
          />
      </div>

      {/* Card actions */}
      <div className="border-t border-amber-100 p-4 flex justify-between">
        
        <Link
          href={pdfUrl}
          download
          className="flex items-center bg-amber-50 hover:bg-amber-100 text-amber-600 px-3 py-1 rounded-full transition-colors text-sm font-medium"
        >
          <Download size={16} className="mr-1" />
          Download
        </Link>
      </div>
    </div>
  )
}
