'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-500 text-white py-20 px-8 sm:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        
        {/* About */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-8 tracking-wide">
            About Us
          </h3>
          <p className="text-lg leading-relaxed">
            We deliver world-class learning experiences through expert instructors and high-quality content to empower your growth.
          </p>
          <p className="mt-8 text-base italic text-white">
            &quot;Education is the most powerful weapon to change the world.&quot;
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-8 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-6 text-white font-semibold text-lg">
            {['Home', 'Courses', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="relative group inline-block px-1 hover:text-white transition-all duration-300"
                >
                  {link}
                  <span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-8 tracking-wide">
            Contact
          </h3>
          <address className="not-italic space-y-4 text-white text-lg">
            <p>123 Learning St.</p>
            <p>Knowledge City, 45678</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@learning.com"
                className="hover:text-white transition"
              >
                info@learning.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-white transition">
                +1 234 567 890
              </a>
            </p>
          </address>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-3xl font-extrabold text-white mb-8 tracking-wide">
            Follow Us
          </h3>
          <div className="flex space-x-8">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="text-white hover:text-white transition-transform transform hover:scale-110"
              >
                <Icon size={32} strokeWidth={1.7} />
              </a>
            ))}
          </div>
          <p className="mt-10 text-white text-lg tracking-wide">
            Stay connected for the latest updates and offerings.
          </p>
        </div>
      </div>

      <div className="mt-20 border-t border-white pt-8 text-center text-white text-lg select-none">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
