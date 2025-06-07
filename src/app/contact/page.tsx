"use client";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-20 space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-600">Contact Us</h1>
        <p className="text-gray-700 text-base sm:text-lg">We’re here to help. Reach out to us anytime.</p>
      </header>

      {/* Contact Info */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4">
          <MapPin className="text-amber-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p className="text-sm text-gray-700">123 Tech Street, Bengaluru, India</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4">
          <Mail className="text-amber-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-sm text-gray-700">contact@example.com</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-start space-x-4">
          <Phone className="text-amber-600 mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-sm text-gray-700">+91 98765 43210</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md">
        <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8293196643925!2d77.59456261484898!3d12.97159899085796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670a98312f7%3A0x8f6e8cfded0b7dbf!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1618202295044!5m2!1sen!2sin"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>

      </section>

      {/* Contact Form */}
      <ContactForm />

    </main>
  );
}
