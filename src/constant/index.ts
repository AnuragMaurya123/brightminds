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
    link: "/notes",
    title: "Notes",
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
     image: '/slider.jpg',
     title: 'Empower Bright Minds',
     subtitle: 'Join our learning revolution and discover your true potential.',
   },
   {
     image: '/slider.jpg',
     title: 'Learn from Experts',
     subtitle: 'Courses led by industry leaders with real-world experience.',
   },
   {
     image: '/slider.jpg',
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
    image: "https://imgs.search.brave.com/O7g385qZFXR1HldtCRglx97edx7fd-3R2kc_HNSW9Kg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/OS8xNy8xMS80Ny9t/YW4tNDQ5NDA1XzY0/MC5qcGc",
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


export interface TopperStudent {
  id: number
  name: string
  image: string
  standard: string
  marks: number
}

export const topperStudents: TopperStudent[] = [
  {
    id: 1,
    name: "Aamantabish Siddiqui",
    image: "/reviews/1.jpg",
    standard: "Class 10",
    marks: 93,
  },
  {
    id: 2,
    name: "Govind Rana",
    image: "/reviews/2.jpg",
    standard: "Class 10",
    marks: 90,
  },
  {
    id: 3,
    name: "Sahnawaj Ansari",
    image: "/reviews/3.jpg",
    standard: "Class 10",
    marks: 87,
  },
  {
    id: 4,
    name: "Esmita Singh",
    image: "/reviews/4.jpg",
    standard: "Class 10",
    marks: 87,
  },
  {
    id: 5,
    name: "Aryan Gupta",
    image: "/reviews/5.jpg",
    standard: "Class 10",
    marks: 91,
  },
]
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



export interface PdfNoteProps {
  lesson: string;
  noteTitle: string;
  pdfUrl: string;
}

export interface SubjectNotes {
  subject: string;
  notes: PdfNoteProps[];
}

export const pdfNotes: SubjectNotes[] = [
  {
    subject: "Mathematics",
    notes: [
      {
        lesson: "Algebra",
        noteTitle: "Quadratic Equations",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Trigonometry",
        noteTitle: "Introduction to Trigonometry",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Trigonometry",
        noteTitle: "Introduction to Trigonometry",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Trigonometry",
        noteTitle: "Introduction to Trigonometry",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Trigonometry",
        noteTitle: "Introduction to Trigonometry",
        pdfUrl: "/notes/1.pdf",
      },
    ],
  },
  {
    subject: "Physics",
    notes: [
      {
        lesson: "Motion",
        noteTitle: "Laws of Motion",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Work and Energy",
        noteTitle: "Work, Power, Energy",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Work and Energy",
        noteTitle: "Work, Power, Energy",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Work and Energy",
        noteTitle: "Work, Power, Energy",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Work and Energy",
        noteTitle: "Work, Power, Energy",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Work and Energy",
        noteTitle: "Work, Power, Energy",
        pdfUrl: "/notes/1.pdf",
      },
    ],
  },
  {
    subject: "Chemistry",
    notes: [
      {
        lesson: "Atoms",
        noteTitle: "Atomic Structure",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
      {
        lesson: "Bonds",
        noteTitle: "Chemical Bonding",
        pdfUrl: "/notes/1.pdf",
      },
    ],
  },
];
