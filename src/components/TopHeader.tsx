"use client";

import React from "react";
import { Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div className="bg-amber-600 text-white text-sm py-2 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-y-2 gap-x-6 text-center md:text-left">
        
        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[13px] sm:text-sm">
          <div className="flex items-center gap-1.5">
            <Phone size={16} className="shrink-0" />
            <Link href="tel:+918087626258" className="hover:underline hover:text-white/90 transition">
              +91 8087626258
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone size={16} className="shrink-0" />
            <Link href="tel:+917397930070" className="hover:underline hover:text-white/90 transition">
              +91 7397930070
            </Link>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={16} className="shrink-0" />
            <Link
              href="mailto:brightmindclass@gmail.com"
              className="hover:underline hover:text-white/90 transition"
            >
             brightmindclass@gmail.com
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/90 transition"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
