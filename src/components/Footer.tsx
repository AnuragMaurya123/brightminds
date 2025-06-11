'use client';

import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  PhoneCall,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-500 text-white pt-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* About */}
        <div>
          <h3 className="text-2xl font-bold mb-6">About Us</h3>
          <p className="text-base leading-relaxed">
            We deliver world-class learning experiences through expert instructors and high-quality content to empower your growth.
          </p>
          <p className="mt-6 italic text-sm opacity-90">
            &quot;Education is the most powerful weapon to change the world.&quot;
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-base font-medium">
            {['Home', 'Coaching', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="relative group inline-block px-1 transition-colors hover:text-white"
                >
                  {link}
                  <span className="block h-0.5 w-0 bg-white transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <address className="not-italic space-y-5 text-base">
            <ul className="flex items-start gap-3">
              <li><MapPin size={20} /></li>
              <li>
                D/101, 1st Floor, Laxmi Nagar Apt., Opp. Kailash Darshan,
                Alkapuri Road, Nallasopara (East), Dist, Palghar - 401209
              </li>
            </ul>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <a
                href="mailto:brightmindclass@gmail.com"
                className="hover:underline"
              >
                brightmindclass@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCall size={20} />
              <a
                href="tel:+918087626258"
                className="hover:underline"
              >
                +91 8087626258
              </a>
            </div>

            <div className="flex items-center gap-3">
              <PhoneCall size={20} />
              <a
                href="tel:+917397930070"
                className="hover:underline"
              >
                +91 7397930070
              </a>
            </div>
          </address>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
          <div className="flex gap-6">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="hover:scale-110 transform transition"
              >
                <Icon size={26} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-base opacity-90">
            Stay connected for the latest updates and offerings.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-t border-white/30 pt-6 text-center text-sm sm:text-base opacity-90">
        &copy; {new Date().getFullYear()} BrightMind Classes. All rights reserved.
      </div>
    </footer>
  );
}
