import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesSlider from "@/components/CoursesSilder";
import { NewsMarquee } from "@/components/NewsMarquee";
import TopperStudentsCarousel from "@/components/TopperStudentsCarousel";


export default function Home() {
  return (
    <div className="">
        <Hero/> 
        <NewsMarquee/>
        <AboutUs/> 
        <CoursesSlider/>
        <Instructor/>
        <Gallery/>
        <WhyChooseUs/> 
        <TopperStudentsCarousel/>
    </div>
  );
}
