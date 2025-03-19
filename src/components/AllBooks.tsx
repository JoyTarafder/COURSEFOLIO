import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Book, books } from "../data/booksData";

interface AllBooksProps {
  navigateTo: (page: string) => void;
}

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

const AllBooks: React.FC<AllBooksProps> = ({ navigateTo }) => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSampleType, setSelectedSampleType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [visibleBooks, setVisibleBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract all unique categories from books
  const allCategories = React.useMemo(() => {
    const categoriesSet = new Set<string>();
    books.forEach((book) => {
      book.categories?.forEach((category) => {
        categoriesSet.add(category);
      });
    });
    return Array.from(categoriesSet).sort();
  }, []);

  // Extract all unique sample types from books
  const allSampleTypes = React.useMemo(() => {
    const sampleTypesSet = new Set<string>();
    books.forEach((book) => {
      sampleTypesSet.add(book.sampleType);
    });
    return Array.from(sampleTypesSet).sort();
  }, []);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    // Filter books based on search term, category, and sample type
    let result = [...books];

    if (searchTerm.trim() !== "") {
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((book) =>
        book.categories?.includes(selectedCategory)
      );
    }

    if (selectedSampleType !== "all") {
      result = result.filter((book) => book.sampleType === selectedSampleType);
    }

    // Sort books
    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "date":
        result.sort((a, b) => {
          if (!a.publishedDate || !b.publishedDate) return 0;
          return (
            new Date(b.publishedDate).getTime() -
            new Date(a.publishedDate).getTime()
          );
        });
        break;
      default:
        // Default sorting by ID
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredBooks(result);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleBooks(result);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedSampleType, sortBy]);

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
    <section className="py-24 bg-gradient-to-b from-purple-50/30 via-white/50 to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/4 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] dark:bg-grid-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-4 inline-block">
              Complete Collection
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            All{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Academic Books
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Browse through our complete collection of carefully curated books to
            enhance your knowledge and skills. Download sample chapters and code
            examples to get started on your learning journey.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-6 backdrop-blur-sm animate-fade-in animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-4 mb-4">
              <div className="relative">
                {renderIcon(
                  "FaSearch",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  18
                )}
                <input
                  type="text"
                  placeholder="Search books by title, author, or description..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    onClick={() => setSearchTerm("")}
                  >
                    {renderIcon("FaTimes", "", 18)}
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <div className="relative">
                {renderIcon(
                  "FaFilter",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {allCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Sample Type Filter */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sample Type
              </label>
              <div className="relative">
                {renderIcon(
                  "FaBookOpen",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={selectedSampleType}
                  onChange={(e) => setSelectedSampleType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {allSampleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sort By
              </label>
              <div className="relative">
                {renderIcon(
                  "FaSort",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="title">Title (A-Z)</option>
                  <option value="rating">Highest Rated</option>
                  <option value="date">Most Recent</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="col-span-1 md:col-span-4 flex items-center mt-2">
              <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center">
                  {renderIcon("FaBook", "mr-2 text-purple-500", 16)}
                  {filteredBooks.length}{" "}
                  {filteredBooks.length === 1 ? "book" : "books"} found
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : visibleBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {visibleBooks.map((book, index) => (
              <div
                key={book.id}
                className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
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
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-1">
                    by {book.author}
                  </p>

                  <div className="flex items-center mb-4">
                    <RatingStars rating={book.rating} />
                    <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                      ({book.rating})
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {book.categories?.slice(0, 2).map((category) => (
                      <span
                        key={`${book.id}-${category}`}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                    {(book.categories?.length || 0) > 2 && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                        +{(book.categories?.length || 0) - 2} more
                      </span>
                    )}
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
        ) : (
          <div className="text-center py-16 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-sm shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-6 text-gray-400 dark:text-gray-500">
              {renderIcon("FaSearchMinus", "", 64)}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              No books found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We couldn't find any books matching your criteria. Try adjusting
              your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedSampleType("all");
                setSortBy("default");
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium transition duration-300 hover:shadow-lg"
            >
              {renderIcon("FaUndoAlt", "mr-2", 16)}
              Reset Filters
            </button>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="mt-16 text-center animate-fade-in animation-delay-700">
          <button
            onClick={() => navigateTo("home")}
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-500 rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            {renderIcon(
              "FaArrowLeft",
              "mr-2 group-hover:-translate-x-1 transition-transform",
              16
            )}
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
