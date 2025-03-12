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
            <a href="/" className="text-2xl font-bold text-gray-800">
              AllRounder
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
              className="text-gray-600 hover:text-purple-600 transition duration-300"
              aria-label="Search"
            >
              {renderIcon("FaSearch")}
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
          className={`search-container overflow-hidden transition-all duration-300 ${
            isSearchOpen ? "h-16 opacity-100 mb-4" : "h-0 opacity-0"
          }`}
        >
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              id="search-input"
              type="text"
              placeholder="Search for books, courses, or source code..."
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-600 text-white p-2 rounded-r-md hover:bg-purple-700 transition duration-300"
            >
              {renderIcon("FaSearch", "text-white")}
            </button>
          </form>
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
