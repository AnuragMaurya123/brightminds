'use client';

import { headerOptions } from '@/constant';
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="BrightMinds"
            width={60}
            height={60}
            style={{width:"auto",height:"auto"}}
            priority
          />
          <div className="flex flex-col leading-tight">
            <span className="uppercase text-xl font-extrabold text-orange-700 tracking-wide">
              Bright
            </span>
            <span className="uppercase text-xl font-extrabold text-orange-700 tracking-wide">
              Minds
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {headerOptions.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="relative text-gray-700 font-medium hover:text-orange-500 transition-colors duration-300"
            >
              <span className="hover-underline">{item.title}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            {headerOptions.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <ScrollProgress />
    </header>
  );
};

export default Header;
