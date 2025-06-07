"use client"

import { FileText, Download, Eye } from "lucide-react"
import { useState } from "react"

interface PdfCardProps {
  lesson: string
  noteTitle: string
  pdfUrl: string
}

export default function PdfCard({ lesson, noteTitle, pdfUrl }: PdfCardProps) {
  const [pdfError, setPdfError] = useState(false)

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 h-[480px] flex flex-col">
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
      <div className="p-5 flex-grow flex flex-col">
        <h4 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">{noteTitle}</h4>
        <p className="text-gray-500 text-sm mb-4">Complete study material with examples and practice questions</p>

        {/* PDF Preview container */}
        <div className="relative w-full h-[180px] mb-4 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
          {!pdfError ? (
            <>
              {/* Desktop PDF Preview */}
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH&zoom=75`}
                title="PDF Preview"
                className="w-full h-full hidden sm:block"
                loading="lazy"
                onError={() => setPdfError(true)}
              />

              {/* Mobile Fallback */}
              <div className="sm:hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
                <div className="text-center p-4">
                  <FileText className="mx-auto text-amber-600 mb-3" size={32} />
                  <p className="text-sm font-medium text-gray-700 mb-1">PDF Preview</p>
                  <p className="text-xs text-gray-500">Tap &quot;View&quot; to open</p>
                </div>
              </div>
            </>
          ) : (
            /* Error Fallback */
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100">
              <div className="text-center p-4">
                <FileText className="mx-auto text-amber-600 mb-3" size={32} />
                <p className="text-sm font-medium text-gray-700 mb-1">{noteTitle}</p>
                <p className="text-xs text-gray-500">Click below to view PDF</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card actions */}
      <div className="border-t border-amber-100 p-4 flex justify-between gap-2">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-amber-600 hover:text-amber-700 transition-colors text-sm font-medium"
        >
          <Eye size={16} className="mr-1" />
          View
        </a>

        <a
          href={pdfUrl}
          download
          className="flex items-center bg-amber-50 hover:bg-amber-100 text-amber-600 px-3 py-1 rounded-full transition-colors text-sm font-medium"
        >
          <Download size={16} className="mr-1" />
          Download
        </a>
      </div>
    </div>
  )
}
