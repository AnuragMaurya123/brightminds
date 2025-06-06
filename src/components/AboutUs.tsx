import Image from "next/image"
import { BookOpen, Video, Users, Smile, Award } from "lucide-react"
import StatCard from "./StatCard"


export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-50 py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-orange-300 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-orange-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-blue-300 blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* Image Section */}
          <div className="relative w-full lg:w-1/2 group">
            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.jpg"
                fill
                alt="About Us - Students Learning"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Award className="text-orange-500" size={24} />
              </div>

             
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full opacity-60 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-40 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm text-orange-500 uppercase font-bold tracking-wider bg-orange-100 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                First Choice For{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Online Education
                </span>{" "}
                Anywhere
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to providing world-class online education that empowers learners to achieve their
                goals. Our platform combines cutting-edge technology with expert instruction to deliver an unparalleled
                learning experience.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With a diverse range of courses and a community of passionate educators, we make quality education
                accessible to everyone, everywhere.
              </p>
            </div>

          

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <StatCard
                icon={<BookOpen size={28} className="text-orange-500" />}
                label="Available Subjects"
                value={120}
              />
              <StatCard icon={<Video size={28} className="text-blue-500" />} label="Online Courses" value={85} />
              <StatCard icon={<Users size={28} className="text-green-500" />} label="Skilled Instructors" value={45} />
              <StatCard icon={<Smile size={28} className="text-purple-500" />} label="Happy Students" value={2300} />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}
