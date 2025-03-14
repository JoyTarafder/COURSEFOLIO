import React, { useState } from "react";
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
    downloadUrl: "/files/book-sample.pdf",
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
    downloadUrl: "/files/code-examples.pdf",
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
    downloadUrl: "/files/book-sample.pdf",
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
    downloadUrl: "/files/code-examples.pdf",
    sampleType: "Code Examples",
  },
  {
    id: 5,
    title: "Learning TypeScript",
    author: "Josh Goldberg",
    coverImage:
      "https://m.media-amazon.com/images/I/51vKIX5W-QL._SX379_BO1,204,203,200_.jpg",
    rating: 4.5,
    description:
      "Enhance your JavaScript skills by learning TypeScript, a typed superset of JavaScript that builds on its syntax.",
    downloadUrl: "/files/code-examples.pdf",
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

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    const emptyStar = renderIcon("FaRegStar", `empty-star-${i}`);
    if (emptyStar) stars.push(emptyStar);
  }

  return <div className="flex space-x-1">{stars}</div>;
};

const Books: React.FC = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

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
    <section
      id="books"
      className="py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] dark:bg-grid-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-4 inline-block">
              Knowledge Resources
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            Academic <span className="gradient-text-alt">Books</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Expand your knowledge with these carefully selected books that will
            help you master your craft. Download sample chapters and code
            examples to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredBook(book.id)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover overlay with description */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 to-indigo-900/70 flex items-end p-4 transition-opacity duration-300 ${
                    hoveredBook === book.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div>
                    <p className="text-white text-sm mb-2">
                      {book.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-purple-200">
                        {book.sampleType}
                      </span>
                      <a
                        href={book.downloadUrl}
                        download
                        className="inline-flex items-center px-3 py-1 bg-white text-purple-700 text-xs rounded-full hover:bg-purple-50 transition duration-300 transform hover:scale-105"
                      >
                        {renderIcon("FaDownload", "mr-1", 12)}
                        <span>Preview</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">
                  {book.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">
                  by {book.author}
                </p>

                <div className="flex items-center mb-4">
                  <RatingStars rating={book.rating} />
                  <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                    ({book.rating})
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                    {renderIcon("FaBookOpen", "mr-1 text-purple-500", 14)}
                    {book.sampleType}
                  </span>
                  <a
                    href={book.downloadUrl}
                    download
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg group"
                  >
                    {renderIcon(
                      "FaDownload",
                      "mr-1 group-hover:animate-bounce",
                      14
                    )}
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in animation-delay-700">
          <a
            href="/books"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <span>Browse All Books</span>
            {renderIcon(
              "FaArrowRight",
              "ml-2 group-hover:translate-x-1 transition-transform",
              16
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Books;
