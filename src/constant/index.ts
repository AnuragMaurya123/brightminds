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
    title: "Coaching",
  },
  {
    link: "/notes",
    title: "Notes",
  },
  {
    link: "/exams",
    title: "Exam",
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
}
export const instructorsData: Instructor[] = [
  {
    id: 1,
    name: "Prof. Sanjay Jha ( Founder & Director )",
    title: "M.Sc. in Mathematics, M.Sc. in Chemistry, M.A. in Political Science and International Relations.",
    bio: "Prof. Sanjay Jha, Founder and Director of Bright Minds, holds M.Sc. degrees in Mathematics and Chemistry. With over 20 years of teaching experience in top schools and as a UPSC achiever (2004), he is also a skilled counselor guiding students in academics and career planning",
    image: "/sanjay.png"
  },
  {
    id: 2,
    name: "Rohit Sir",
    title: "BSc IT, MA (Political Science & International Relations)",
    bio: "6 years of experience in top schools and coaching institutes.UPSC Polity faculty for the last few years.",
    image: "/rohit.jpg"
  },

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
    title: "Pre-Primary, Primary, Secondary",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "/coaching/4.jpg",
  },
  {
    id: 2,
    title: "11th & 12th Commerce & Science (Integrated / Non Integrated)",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "/coaching/1.jpg",
  },
  {
    id: 3,
    title: "CA/CS/Banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "/coaching/2.webp",
  },
  {
    id: 4,
    title: "Government Exam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image:
      "/coaching/3.jpg",
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
