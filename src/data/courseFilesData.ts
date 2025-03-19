export interface CourseFile {
  id: number;
  title: string;
  description: string;
  fileType: "pdf" | "word" | "excel";
  downloadUrl: string;
  lastUpdated: string;
  size: string;
  downloads: number;
  color?: string;
}

export const courseFiles: CourseFile[] = [
  {
    id: 1,
    title: "Analog Electronics",
    description:
      "Learn the basics of analog electronics and build circuits from scratch.",
    fileType: "pdf",
    downloadUrl: "/files/EM2_Exp-6_23-50639-1.pdf",
    lastUpdated: "June 15, 2023",
    size: "2.5 MB",
    downloads: 1234,
    color: "from-cyan-500 to-orange-500",
  },
  {
    id: 2,
    title: "Digital Logic & Circuits",
    description:
      "Understand the fundamentals of digital logic and design circuits.",
    fileType: "pdf",
    downloadUrl: "/files/react-beginners.pdf",
    lastUpdated: "July 1, 2023",
    size: "1.8 MB",
    downloads: 856,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Modern Control Systems",
    description: "Explore the principles of modern control systems.",
    fileType: "pdf",
    downloadUrl: "/files/advanced-css.pdf",
    lastUpdated: "June 28, 2023",
    size: "3.2 MB",
    downloads: 2156,
    color: "from-red-400 to-violet-500",
  },
  {
    id: 4,
    title: "Signal & Linear Systems",
    description:
      "Learn about signals and linear systems and their applications.",
    fileType: "pdf",
    downloadUrl: "/files/ami-ekjon-salsman-bangla.pdf",
    lastUpdated: "July 5, 2023",
    size: "1.5 MB",
    downloads: 567,
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    title: "Industrial Electronics & Drives",
    description:
      "Study the concepts of industrial electronics and drives in detail.",
    fileType: "pdf",
    downloadUrl: "/files/ami-ekjon-salsman-bangla.pdf",
    lastUpdated: "July 5, 2023",
    size: "1.5 MB",
    downloads: 567,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 6,
    title: "VLSI",
    description: "Learn about the design and implementation of VLSI circuits.",
    fileType: "pdf",
    downloadUrl: "/files/ami-ekjon-salsman-bangla.pdf",
    lastUpdated: "July 5, 2023",
    size: "1.5 MB",
    downloads: 567,
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: 7,
    title: "Power Systems Analysis",
    description:
      "Comprehensive study of power systems analysis and design principles.",
    fileType: "pdf",
    downloadUrl: "/files/power-systems.pdf",
    lastUpdated: "August 12, 2023",
    size: "4.8 MB",
    downloads: 1892,
    color: "from-red-500 to-yellow-500",
  },
  {
    id: 8,
    title: "Microprocessors & Microcontrollers",
    description:
      "Learn about microprocessors and microcontrollers and their applications in embedded systems.",
    fileType: "pdf",
    downloadUrl: "/files/microprocessors.pdf",
    lastUpdated: "September 3, 2023",
    size: "3.7 MB",
    downloads: 2304,
    color: "from-blue-400 to-indigo-600",
  },
  {
    id: 9,
    title: "Communication Systems",
    description:
      "Explore analog and digital communication systems, modulation techniques, and signal processing.",
    fileType: "pdf",
    downloadUrl: "/files/communication-systems.pdf",
    lastUpdated: "July 28, 2023",
    size: "5.2 MB",
    downloads: 1756,
    color: "from-teal-400 to-blue-500",
  },
  {
    id: 10,
    title: "Electromagnetic Field Theory",
    description:
      "Fundamentals of electromagnetic fields, Maxwell's equations, and wave propagation.",
    fileType: "pdf",
    downloadUrl: "/files/electromagnetic-theory.pdf",
    lastUpdated: "August 5, 2023",
    size: "4.1 MB",
    downloads: 1425,
    color: "from-purple-400 to-pink-500",
  },
];
