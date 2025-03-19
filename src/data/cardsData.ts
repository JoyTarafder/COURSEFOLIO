export interface Card {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  downloadUrl: string;
  fileType: string;
  technologies: string[];
  lastUpdated: string;
  size: string;
  category?: string;
  author?: string;
  platform?: string;
}

export const cards: Card[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Create responsive and dynamic websites using the latest technologies and frameworks.",
    iconName: "FaCode",
    color: "from-blue-500 to-blue-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    lastUpdated: "July 5, 2023",
    size: "2.8 MB",
    category: "Frontend",
    author: "Alex Johnson",
    platform: "Web",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design beautiful user interfaces with a focus on user experience and accessibility.",
    iconName: "FaPalette",
    color: "from-purple-500 to-purple-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS"],
    lastUpdated: "June 28, 2023",
    size: "1.5 MB",
    category: "Design",
    author: "Sarah Parker",
    platform: "Web",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Build cross-platform mobile applications that work seamlessly on iOS and Android.",
    iconName: "FaMobile",
    color: "from-green-500 to-green-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["React Native", "Flutter", "Firebase"],
    lastUpdated: "July 1, 2023",
    size: "3.2 MB",
    category: "Mobile",
    author: "Michael Chen",
    platform: "iOS/Android",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Optimize your applications for speed, efficiency, and better user experience.",
    iconName: "FaRocket",
    color: "from-red-500 to-red-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Webpack", "Lighthouse", "PWA"],
    lastUpdated: "June 25, 2023",
    size: "1.8 MB",
    category: "Performance",
    author: "Emma Williams",
    platform: "Web",
  },
  {
    id: 5,
    title: "Principal of Power System",
    description:
      "Detailed explanation of the principles of power systems and their applications.",
    iconName: "FaLaptopCode",
    color: "from-yellow-500 to-yellow-600",
    downloadUrl:
      "/files/Principles of Power System -- V K Mehta, Rohit Mehta.pdf",
    fileType: "BOOK",
    technologies: [
      "Transmission Line",
      "Bundle Conductor",
      "Types of Insulator",
      "Voltage Distribution",
    ],
    lastUpdated: "March 14, 2025",
    size: "35 MB",
    category: "Engineering",
    author: "Rohit Mehta",
    platform: "PDF",
  },
  {
    id: 6,
    title: "Analytics Integration",
    description:
      "Implement analytics to track user behavior and improve your application.",
    iconName: "FaChartLine",
    color: "from-indigo-500 to-indigo-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Google Analytics", "Mixpanel", "Segment"],
    lastUpdated: "June 30, 2023",
    size: "2.1 MB",
    category: "Analytics",
    author: "David Thompson",
    platform: "Web",
  },
  {
    id: 7,
    title: "Backend API Development",
    description:
      "Create robust and scalable APIs for your web and mobile applications.",
    iconName: "FaServer",
    color: "from-teal-500 to-teal-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Node.js", "Express", "MongoDB", "GraphQL"],
    lastUpdated: "July 15, 2023",
    size: "4.5 MB",
    category: "Backend",
    author: "James Wilson",
    platform: "Server",
  },
  {
    id: 8,
    title: "Cloud Infrastructure",
    description:
      "Deploy and manage your applications using modern cloud services and serverless architecture.",
    iconName: "FaCloud",
    color: "from-blue-400 to-blue-500",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    lastUpdated: "July 10, 2023",
    size: "3.8 MB",
    category: "DevOps",
    author: "Sophia Rodriguez",
    platform: "Cloud",
  },
  {
    id: 9,
    title: "Machine Learning Algorithms",
    description:
      "Implement and understand various machine learning algorithms with practical examples.",
    iconName: "FaBrain",
    color: "from-pink-500 to-pink-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn"],
    lastUpdated: "July 20, 2023",
    size: "7.2 MB",
    category: "AI/ML",
    author: "Robert Zhang",
    platform: "Python",
  },
];
