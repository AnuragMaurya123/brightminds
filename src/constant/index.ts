export const headerOptions = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/courses",
    title: "Courses",
  },
  {
    link: "/gallery",
    title: "Gallery",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

 export const slides = [
   {
     image: '/hero-bg.jpg',
     title: 'Empower Bright Minds',
     subtitle: 'Join our learning revolution and discover your true potential.',
   },
   {
     image: '/hero-bg.jpg',
     title: 'Learn from Experts',
     subtitle: 'Courses led by industry leaders with real-world experience.',
   },
   {
     image: '/hero-bg.jpg',
     title: 'Build Your Career',
     subtitle: 'We help you land your dream job with career-ready skills.',
   },
 ];
 
export interface Instructor {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties: string[];
}
export const instructorsData: Instructor[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    title: "Head of Mathematics Department",
    bio: "Ph.D. in Mathematics with 15+ years of teaching experience. Specializes in calculus, algebra, and preparing students for national olympiads.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specialties: ["Algebra", "Calculus", "Trigonometry", "Math Olympiad", "Statistics"]
  },
  {
    id: 2,
    name: "Prof. Anita Sharma",
    title: "Senior English Teacher",
    bio: "12 years of teaching English literature and grammar. Passionate about creative writing and public speaking skills.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specialties: ["Grammar", "Literature", "Creative Writing", "Public Speaking"]
  },
  {
    id: 3,
    name: "Dr. Sanjay Mehta",
    title: "Science & Technology Instructor",
    bio: "Former education researcher with expertise in high school science curriculum and interactive STEM teaching.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specialties: ["Physics", "Chemistry", "Biology", "STEM Projects"]
  },
  {
    id: 4,
    name: "Ms. Priya Nair",
    title: "Social Science Educator",
    bio: "Expert in teaching geography and history with a decade of experience in creating interactive learning modules for middle school.",
    image: "https://images.unsplash.com/photo-1553769092-0f2c9c1e5299?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specialties: ["Geography", "History", "Civics", "Environmental Studies"]
  },
  {
    id: 5,
    name: "Mr. Arjun Verma",
    title: "Physical Education Coach",
    bio: "Certified sports coach with a focus on holistic development through athletics, yoga, and team-building exercises.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    specialties: ["Sports", "Yoga", "Fitness", "Team Sports"]
  }
];


export interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
  rating: number; // ⭐ from 1 to 5
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "Software Engineer",
    message: "This platform truly transformed the way I learned. The instructors are top-notch and content is super engaging.",
    image: "/person1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Data Scientist",
    message: "The structured curriculum and real-world projects helped me land my dream job. Highly recommended!",
    image: "/person2.webp",
    rating: 4,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Product Manager",
    message: "Not just theory but practical applications made this learning journey truly impactful. Love it!",
    image: "/person3.webp",
    rating: 5,
  },
];
export interface CoursesCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}


export const courses:CoursesCardProps[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Learn to build modern web applications with React, Node.js, Express, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    description:
      "Master data analysis, visualization, and machine learning using Python and popular libraries.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Design beautiful and user-friendly interfaces with modern tools and best practices.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    description:
      "Get hands-on experience deploying and managing cloud infrastructure on AWS.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile apps with React Native and Expo.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
];
