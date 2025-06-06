import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSlider from "@/components/CoursesSilder";
import { NewsMarquee } from "@/components/NewsMarquee";


export default function Home() {
  return (
    <div className="">
        <Hero/> 
        <NewsMarquee/>
        <AboutUs/> 
        <Instructor/>
        <Gallery/>
        <CoursesSlider/>
        <WhyChooseUs/> 
        <TestimonialCarousel/>
    </div>
  );
}
