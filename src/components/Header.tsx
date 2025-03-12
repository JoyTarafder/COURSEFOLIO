import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderIcon = (iconName: string, size: number = 24) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">COURSE FOLIO</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? renderIcon("FaTimes") : renderIcon("FaBars")}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-purple-200 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#courses"
              className="hover:text-purple-200 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#books"
              className="hover:text-purple-200 transition duration-300"
            >
              Books
            </a>
            <a
              href="#cards"
              className="hover:text-purple-200 transition duration-300"
            >
              Cards
            </a>
            <a
              href="#contact"
              className="hover:text-purple-200 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            <a
              href="#about"
              className="hover:text-purple-200 transition duration-300"
            >
              About Me
            </a>
            <a
              href="#courses"
              className="hover:text-purple-200 transition duration-300"
            >
              Courses
            </a>
            <a
              href="#books"
              className="hover:text-purple-200 transition duration-300"
            >
              Books
            </a>
            <a
              href="#cards"
              className="hover:text-purple-200 transition duration-300"
            >
              Cards
            </a>
            <a
              href="#contact"
              className="hover:text-purple-200 transition duration-300"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
