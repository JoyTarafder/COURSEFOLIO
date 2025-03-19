import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Card, cards } from "../data/cardsData";

interface AllCardsProps {
  navigateTo: (page: string) => void;
}

const AllCards: React.FC<AllCardsProps> = ({ navigateTo }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedFileType, setSelectedFileType] = useState<string>("all");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [visibleCards, setVisibleCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Extract all unique categories from cards
  const allCategories = React.useMemo(() => {
    const categoriesSet = new Set<string>();
    cards.forEach((card) => {
      if (card.category) {
        categoriesSet.add(card.category);
      }
    });
    return Array.from(categoriesSet).sort();
  }, []);

  // Extract all unique file types from cards
  const allFileTypes = React.useMemo(() => {
    const fileTypesSet = new Set<string>();
    cards.forEach((card) => {
      fileTypesSet.add(card.fileType);
    });
    return Array.from(fileTypesSet).sort();
  }, []);

  // Extract all unique platforms from cards
  const allPlatforms = React.useMemo(() => {
    const platformsSet = new Set<string>();
    cards.forEach((card) => {
      if (card.platform) {
        platformsSet.add(card.platform);
      }
    });
    return Array.from(platformsSet).sort();
  }, []);

  // Extract all unique technologies from cards
  const allTechnologies = React.useMemo(() => {
    const techSet = new Set<string>();
    cards.forEach((card) => {
      card.technologies.forEach((tech) => {
        techSet.add(tech);
      });
    });
    return Array.from(techSet).sort();
  }, []);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    // Filter cards based on search term, category, and file type
    let result = [...cards];

    if (searchTerm.trim() !== "") {
      result = result.filter(
        (card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter((card) => card.category === selectedCategory);
    }

    if (selectedFileType !== "all") {
      result = result.filter((card) => card.fileType === selectedFileType);
    }

    if (selectedPlatform !== "all") {
      result = result.filter((card) => card.platform === selectedPlatform);
    }

    // Sort cards
    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "date":
        result.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        break;
      case "size":
        result.sort((a, b) => {
          const sizeA = parseFloat(a.size.replace(/[^0-9.]/g, ""));
          const sizeB = parseFloat(b.size.replace(/[^0-9.]/g, ""));
          return sizeB - sizeA;
        });
        break;
      default:
        // Default sorting by ID
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredCards(result);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleCards(result);
    }, 500);

    return () => clearTimeout(timer);
  }, [
    searchTerm,
    selectedCategory,
    selectedFileType,
    selectedPlatform,
    sortBy,
  ]);

  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 32
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/30 via-white/50 to-indigo-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden min-h-screen">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-2/3 left-1/4 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] dark:bg-grid-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4 inline-block">
              Complete Collection
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            All{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Source Code
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Browse through our complete collection of source code resources to
            accelerate your development process. Download and use these
            resources for your projects.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-6 backdrop-blur-sm animate-fade-in animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-3 mb-4">
              <div className="relative">
                {renderIcon(
                  "FaSearch",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  18
                )}
                <input
                  type="text"
                  placeholder="Search by title, description, or technology..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <div className="relative">
                {renderIcon(
                  "FaFolderOpen",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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

            {/* File Type Filter */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Type
              </label>
              <div className="relative">
                {renderIcon(
                  "FaFile",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={selectedFileType}
                  onChange={(e) => setSelectedFileType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  {allFileTypes.map((type) => (
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

            {/* Platform Filter */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Platform
              </label>
              <div className="relative">
                {renderIcon(
                  "FaLaptopCode",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                >
                  <option value="all">All Platforms</option>
                  {allPlatforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="col-span-1 md:col-span-2">
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
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="title">Title (A-Z)</option>
                  <option value="date">Most Recent</option>
                  <option value="size">Largest Size</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="col-span-1 flex items-end">
              <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center">
                  {renderIcon("FaCode", "mr-2 text-blue-500", 16)}
                  {filteredCards.length}{" "}
                  {filteredCards.length === 1 ? "resource" : "resources"} found
                </span>
              </div>
            </div>

            {/* Technology Cloud - Chips that can be clicked to filter */}
            <div className="col-span-1 md:col-span-3 mt-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Popular Technologies
              </label>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.slice(0, 15).map((tech) => (
                  <button
                    key={tech}
                    onClick={() => setSearchTerm(tech)}
                    className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-300 ${
                      searchTerm === tech
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : visibleCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleCards.map((card, index) => (
              <div
                key={card.id}
                className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${
                        card.color
                      } text-white shadow-lg transform transition-transform duration-500 ${
                        hoveredCard === card.id ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      {renderIcon(card.iconName, "", 24)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1">
                        {card.title}
                      </h3>
                      <div className="flex items-center flex-wrap gap-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {card.fileType}
                        </span>
                        {card.category && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {card.category}
                          </span>
                        )}
                        {card.platform && (
                          <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                            {card.platform}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {card.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {card.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${card.color} text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                        {renderIcon("FaClock", "mr-1", 12)}
                        <span>{card.lastUpdated}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                        {renderIcon("FaFileArchive", "mr-1", 12)}
                        <span>{card.size}</span>
                      </div>
                    </div>
                    <a
                      href={card.downloadUrl}
                      download
                      className={`inline-flex items-center px-3 py-1.5 bg-gradient-to-r ${card.color} text-white text-sm rounded-lg font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group`}
                    >
                      {renderIcon(
                        "FaDownload",
                        "mr-1 group-hover:animate-bounce",
                        14
                      )}
                      <span>Download</span>
                    </a>
                  </div>

                  {card.author && (
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        {renderIcon("FaUser", "mr-1", 12)}
                        <span>By {card.author}</span>
                      </div>
                    </div>
                  )}
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
              No resources found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We couldn't find any source code resources matching your criteria.
              Try adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedFileType("all");
                setSelectedPlatform("all");
                setSortBy("default");
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium transition duration-300 hover:shadow-lg"
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
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
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

export default AllCards;
