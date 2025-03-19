export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  downloadUrl: string;
  sampleType: string;
  categories?: string[];
  publishedDate?: string;
  publisher?: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    coverImage: "https://eloquentjavascript.net/img/cover.jpg",
    rating: 4.5,
    description:
      "A modern introduction to programming, teaching the essential fundamentals of JavaScript.",
    downloadUrl: "/files/book-sample.pdf",
    sampleType: "Sample Chapter",
    categories: ["Programming", "JavaScript", "Web Development"],
    publishedDate: "2018-12-04",
    publisher: "No Starch Press",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    coverImage:
      "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
    rating: 5,
    description:
      "A handbook of agile software craftsmanship that helps you write better, more maintainable code.",
    downloadUrl: "/files/code-examples.pdf",
    sampleType: "Code Examples",
    categories: ["Programming", "Software Engineering", "Best Practices"],
    publishedDate: "2008-08-11",
    publisher: "Prentice Hall",
  },
  {
    id: 3,
    title: "React Design Patterns",
    author: "Carlos Santana Roldán",
    coverImage:
      "https://m.media-amazon.com/images/I/41D9mMAUxjL._SX404_BO1,204,203,200_.jpg",
    rating: 4,
    description:
      "Learn how to build efficient user interfaces with React by reusing code and creating reusable components.",
    downloadUrl: "/files/book-sample.pdf",
    sampleType: "Sample Chapter",
    categories: ["Programming", "React", "JavaScript", "Web Development"],
    publishedDate: "2018-07-19",
    publisher: "Packt Publishing",
  },
  {
    id: 4,
    title: "Learning TypeScript",
    author: "Josh Goldberg",
    coverImage:
      "https://m.media-amazon.com/images/I/51vKIX5W-QL._SX379_BO1,204,203,200_.jpg",
    rating: 4.5,
    description:
      "Enhance your JavaScript skills by learning TypeScript, a typed superset of JavaScript that builds on its syntax.",
    downloadUrl: "/files/code-examples.pdf",
    sampleType: "Code Examples",
    categories: ["Programming", "TypeScript", "JavaScript"],
    publishedDate: "2022-06-21",
    publisher: "O'Reilly Media",
  },
  {
    id: 5,
    title: "CSS Secrets",
    author: "Lea Verou",
    coverImage:
      "https://m.media-amazon.com/images/I/51aUTzDIxxL._SX258_BO1,204,203,200_.jpg",
    rating: 4.8,
    description:
      "Better solutions to everyday web design problems using advanced CSS techniques and latest best practices.",
    downloadUrl: "/files/book-sample.pdf",
    sampleType: "Sample Chapter",
    categories: ["Web Development", "CSS", "Design"],
    publishedDate: "2015-06-22",
    publisher: "O'Reilly Media",
  },
  {
    id: 6,
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    coverImage:
      "https://m.media-amazon.com/images/I/51szD9HC9pL._SX395_BO1,204,203,200_.jpg",
    rating: 4.7,
    description:
      "Elements of Reusable Object-Oriented Software - the classic book on software design patterns.",
    downloadUrl: "/files/code-examples.pdf",
    sampleType: "Code Examples",
    categories: ["Programming", "Object-Oriented", "Software Architecture"],
    publishedDate: "1994-10-31",
    publisher: "Addison-Wesley Professional",
  },
  {
    id: 7,
    title: "Node.js Design Patterns",
    author: "Mario Casciaro, Luciano Mammino",
    coverImage:
      "https://m.media-amazon.com/images/I/41JlAYImq-L._SX404_BO1,204,203,200_.jpg",
    rating: 4.6,
    description:
      "Implement proven solutions to common problems in Node.js development with this comprehensive guide.",
    downloadUrl: "/files/book-sample.pdf",
    sampleType: "Sample Chapter",
    categories: ["Node.js", "JavaScript", "Backend Development"],
    publishedDate: "2020-07-17",
    publisher: "Packt Publishing",
  },
  {
    id: 8,
    title: "The Pragmatic Programmer",
    author: "David Thomas, Andrew Hunt",
    coverImage:
      "https://m.media-amazon.com/images/I/51yaxPX4BFL._SX380_BO1,204,203,200_.jpg",
    rating: 4.9,
    description:
      "Your journey to mastery - classic guide to better programming with practical advice and professional insights.",
    downloadUrl: "/files/code-examples.pdf",
    sampleType: "Code Examples",
    categories: ["Programming", "Software Engineering", "Career Development"],
    publishedDate: "2019-09-23",
    publisher: "Addison-Wesley Professional",
  },
];
