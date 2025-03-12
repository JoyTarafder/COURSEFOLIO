// Define types for search results
export interface SearchItem {
  id: string;
  title: string;
  type: "book" | "course" | "source";
  description: string;
  url: string;
}

// Mock data for search results
export const searchData: SearchItem[] = [
  // Books
  {
    id: "book-1",
    title: "Modern Web Development",
    type: "book",
    description:
      "A comprehensive guide to modern web development techniques and best practices.",
    url: "#books",
  },
  {
    id: "book-2",
    title: "React Patterns and Practices",
    type: "book",
    description:
      "Learn advanced React patterns and best practices for building scalable applications.",
    url: "#books",
  },
  {
    id: "book-3",
    title: "TypeScript Deep Dive",
    type: "book",
    description:
      "Master TypeScript with this in-depth guide to its features and capabilities.",
    url: "#books",
  },
  {
    id: "book-4",
    title: "CSS Mastery",
    type: "book",
    description: "Advanced techniques for modern CSS styling and layouts.",
    url: "#books",
  },

  // Courses
  {
    id: "course-1",
    title: "Complete React Developer Course",
    type: "course",
    description: "Learn React from scratch and build real-world applications.",
    url: "#courses",
  },
  {
    id: "course-2",
    title: "Advanced JavaScript Concepts",
    type: "course",
    description:
      "Deep dive into advanced JavaScript concepts like closures, prototypes, and async patterns.",
    url: "#courses",
  },
  {
    id: "course-3",
    title: "Full Stack Web Development",
    type: "course",
    description:
      "Build complete web applications with modern frontend and backend technologies.",
    url: "#courses",
  },
  {
    id: "course-4",
    title: "UI/UX Design Fundamentals",
    type: "course",
    description:
      "Learn the principles of good UI/UX design and how to apply them to your projects.",
    url: "#courses",
  },

  // Source Code
  {
    id: "source-1",
    title: "React Component Library",
    type: "source",
    description:
      "A collection of reusable React components for building modern web applications.",
    url: "#services",
  },
  {
    id: "source-2",
    title: "E-commerce Platform Starter",
    type: "source",
    description:
      "Source code for a complete e-commerce platform with shopping cart and payment integration.",
    url: "#services",
  },
  {
    id: "source-3",
    title: "Authentication System",
    type: "source",
    description:
      "Secure authentication system with JWT, OAuth, and role-based access control.",
    url: "#services",
  },
  {
    id: "source-4",
    title: "API Integration Examples",
    type: "source",
    description:
      "Examples of integrating with popular APIs using modern JavaScript techniques.",
    url: "#services",
  },
];

// Function to search through the data
export const searchItems = (query: string): SearchItem[] => {
  if (!query.trim()) return [];

  const lowerCaseQuery = query.toLowerCase();

  return searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery) ||
      item.type.toLowerCase().includes(lowerCaseQuery)
  );
};
