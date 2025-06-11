"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Instructor from "@/components/Instructor";
import Image from "next/image";



export default function About() {
    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-20 space-y-28">
                {/* Hero Section */}
                <section className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-24">
                    <div className="flex-1 space-y-8 max-w-xl animate-fadeInUp">
                        <h1 className="text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                            About <span className="text-amber-600">Our Mission</span>
                        </h1>
                        <p className="text-lg text-gray-700">
                            We are passionate about delivering quality education and empowering learners worldwide with the best
                            instructors, tools, and resources to unlock their true potential. We are passionate about delivering quality education and empowering learners worldwide with the best
                            instructors, tools, and resources to unlock their true potential. We are passionate about delivering quality education and empowering learners worldwide with the best
                            instructors, tools, and resources to unlock their true potential. We are passionate about delivering quality education and empowering learners worldwide with the best
                            instructors, tools, and resources to unlock their true potential.
                        </p>
                    </div>
                    <div className="flex-1 animate-fadeInUp">
                        <Image
                            src="/about.jpg"
                            alt="About us"
                            width={500}
                            height={500}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover rounded-lg w-full h-full"
                            priority
                            
                        />
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-12">
                    {[
                        {
                            title: "Our Mission",
                            content:
                                "To provide accessible and high-quality education for everyone, fostering growth, creativity, and success.",
                        },
                        {
                            title: "Our Vision",
                            content:
                                "To be a global leader in online education by innovating and creating impactful learning experiences.",
                        },
                    ].map(({ title, content }) => (
                        <Card
                            key={title}
                            className="shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 animate-fadeInUp"
                        >
                            <CardHeader className="pt-4">
                                <CardTitle className="text-3xl font-semibold text-amber-600">{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 text-lg">{content}</p>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                {/* Team Section */}
            </main>
            <Instructor />
        </>
    );
}
