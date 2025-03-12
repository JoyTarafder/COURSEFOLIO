import React from "react";
import * as FaIcons from "react-icons/fa";

const Footer: React.FC = () => {
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
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">AllRounder</h3>
            <p className="text-gray-400 mb-4">
              We provide high-quality web development services and educational
              resources to help you succeed in the digital world.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {renderIcon("FaFacebook")}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {renderIcon("FaTwitter")}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {renderIcon("FaInstagram")}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {renderIcon("FaLinkedin")}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#books"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  href="#cards"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                {renderIcon("FaMapMarkerAlt", "text-purple-500 mt-1 mr-3")}
                <span className="text-gray-400">
                  123 Web Dev Street, Coding City, 10001
                </span>
              </li>
              <li className="flex items-center">
                {renderIcon("FaPhone", "text-purple-500 mr-3")}
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                {renderIcon("FaEnvelope", "text-purple-500 mr-3")}
                <span className="text-gray-400">info@allrounder.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and special offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} AllRounder. All rights reserved.
            Developed by{" "}
            <a
              href="https://my-protfolio-jt.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400 transition duration-300"
            >
              Joy Tarafder
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
