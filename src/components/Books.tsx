import React from "react";
import * as FaIcons from "react-icons/fa";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  rating: number;
  description: string;
  downloadUrl: string;
  sampleType: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    coverImage: "https://eloquentjavascript.net/img/cover.jpg",
    rating: 4.5,
    description:
      "A modern introduction to programming, teaching the essential fundamentals of JavaScript.",
    downloadUrl: "/files/sample.txt",
    sampleType: "Sample Chapter",
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
    downloadUrl: "/files/sample.txt",
    sampleType: "Code Examples",
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
    downloadUrl: "/files/sample.txt",
    sampleType: "Sample Chapter",
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
    downloadUrl: "/files/sample.txt",
    sampleType: "Code Examples",
  },
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const renderIcon = (
    iconName: string,
    key: string,
    className: string = "text-yellow-400"
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent key={key} className={className} />
    ) : null;
  };

  const stars: React.ReactNode[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    const star = renderIcon("FaStar", `star-${i}`);
    if (star) stars.push(star);
  }

  if (hasHalfStar) {
    const halfStar = renderIcon("FaStarHalfAlt", "half-star");
    if (halfStar) stars.push(halfStar);
  }

  return <div className="flex">{stars}</div>;
};

const Books: React.FC = () => {
  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 20
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  return (
    <section id="books" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Recommended Books
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expand your knowledge with these carefully selected books that will
            help you master your craft. Download sample chapters and code
            examples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2">by {book.author}</p>
                <div className="flex items-center mb-4">
                  <RatingStars rating={book.rating} />
                  <span className="ml-2 text-gray-600">({book.rating})</span>
                </div>
                <p className="text-gray-600 mb-4">{book.description}</p>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {book.sampleType}
                  </span>
                  <a
                    href={book.downloadUrl}
                    download
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300"
                  >
                    {renderIcon("FaDownload", "mr-1", 14)}
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
