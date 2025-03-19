import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  const quickLinks = [
    { href: "#about", text: "About Me" },
    { href: "#courses", text: "Courses" },
    { href: "#books", text: "Books" },
    { href: "#cards", text: "Code" },
    { href: "#contact", text: "Contact" },
  ];

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Nikunjo 2, Khilkhet, Dhaka, Bangladesh",
      className: "text-purple-500 mt-1 mr-3",
    },
    {
      icon: FaPhone,
      text: "+8801718400180",
      className: "text-purple-500 mr-3",
    },
    {
      icon: FaEnvelope,
      text: "rsk.edu960@gmail.com",
      className: "text-purple-500 mr-3",
    },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Course Folio</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for curated learning resources, courses,
              and books to help you master in Electrical Engineering.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <info.icon className={info.className} size={20} />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
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
            &copy; {new Date().getFullYear()} Course Folio. All rights reserved.
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
