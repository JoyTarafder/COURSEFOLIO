import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SearchItem, searchItems } from "../data/searchData";
import SearchResults from "./SearchResults";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus the search input when opening
      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      // Search for items
      const results = searchItems(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    }
  };

  const closeResults = () => {
    setShowResults(false);
  };

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
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              Course Folio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#books"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Books
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="text-gray-600 hover:text-purple-600 transition duration-300 relative group"
              aria-label="Search"
            >
              {renderIcon("FaSearch")}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Search
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-purple-600 transition duration-300"
              aria-label="Menu"
            >
              {isMenuOpen ? renderIcon("FaTimes") : renderIcon("FaBars")}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`search-container overflow-hidden transition-all duration-500 ${
            isSearchOpen ? "h-20 opacity-100 mb-4" : "h-0 opacity-0"
          }`}
        >
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <form
              onSubmit={handleSearch}
              className="flex items-center relative"
            >
              <div className="absolute left-4 text-gray-400">
                {renderIcon("FaSearch")}
              </div>
              <input
                id="search-input"
                type="text"
                placeholder="Search for books, courses, or source code..."
                className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-l-full rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 h-full px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-r-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 flex items-center justify-center"
              >
                <span className="mr-2 hidden sm:inline">Search</span>
                {renderIcon("FaArrowRight", "text-white")}
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "h-64 opacity-100 mb-4" : "h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <a
              href="/"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#courses"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#books"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Books
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-purple-600 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Search Results */}
      <SearchResults
        query={searchQuery}
        results={searchResults}
        isVisible={showResults}
        onClose={closeResults}
      />
    </header>
  );
};

export default Header;
