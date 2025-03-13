import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SearchItem, searchItems } from "../data/searchData";
import SearchResults from "./SearchResults";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home", "courses", "books", "services", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveNav(currentSection || "");
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
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

  const navItems = [
    { href: "/", label: "Home", id: "home", icon: "FaHome" },
    { href: "#courses", label: "Courses", id: "courses", icon: "FaBook" },
    { href: "#books", label: "Books", id: "books", icon: "FaBookOpen" },
    { href: "#services", label: "Services", id: "services", icon: "FaCogs" },
    { href: "#contact", label: "Contact", id: "contact", icon: "FaEnvelope" },
  ];

  // Calculate gradient position based on mouse position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 50%)`,
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={gradientStyle}
      ></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent dark:from-blue-400/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl dark:bg-purple-400/5 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl dark:bg-indigo-400/5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl dark:bg-blue-400/5 animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="group relative text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:to-indigo-500 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                {renderIcon("FaGraduationCap", "mr-2")}
                Course Folio
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              <span className="absolute -inset-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 group ${
                  activeNav === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : ""
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {renderIcon(item.icon, "mr-2")}
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 ${
                    activeNav === item.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                ></span>
                <span className="absolute -inset-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 rounded-lg transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Search and Mobile Menu Buttons */}
          <div className="flex items-center space-x-6">
            {/* Search Button */}
            <button
              onClick={toggleSearch}
              className="relative group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Search"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {renderIcon(
                "FaSearch",
                "text-gray-600 dark:text-gray-300 relative z-10"
              )}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                Search
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {isMenuOpen
                ? renderIcon(
                    "FaTimes",
                    "text-gray-600 dark:text-gray-300 relative z-10"
                  )
                : renderIcon(
                    "FaBars",
                    "text-gray-600 dark:text-gray-300 relative z-10"
                  )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={`search-container overflow-hidden transition-all duration-500 ${
            isSearchOpen ? "h-20 opacity-100 mb-4" : "h-0 opacity-0"
          }`}
        >
          <div className="glass bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl shadow-lg backdrop-blur-lg transform hover:scale-[1.02] transition-transform duration-300">
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
                className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-700/50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-0 h-full px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-r-xl hover:from-blue-500 hover:to-indigo-500 transition duration-300 flex items-center justify-center group"
              >
                <span className="mr-2 hidden sm:inline">Search</span>
                {renderIcon(
                  "FaArrowRight",
                  "text-white group-hover:translate-x-1 transition-transform"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "h-64 opacity-100 mb-4" : "h-0 opacity-0"
          }`}
        >
          <nav className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg backdrop-blur-lg transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 flex items-center space-x-2 group ${
                    activeNav === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : ""
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {renderIcon(item.icon, "text-sm")}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
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
