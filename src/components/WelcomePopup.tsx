import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import React, { useEffect, useState } from "react";

interface WelcomePopupProps {
  title?: string;
  message?: string;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({
  title = "Welcome to Course Folio!",
  message = "Thank you for visiting our website. Explore our courses, books, and services to enhance your skills and knowledge.",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Safe localStorage getter
  const getLocalStorageItem = (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return null;
    }
  };

  // Safe localStorage setter
  const setLocalStorageItem = (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error("Error setting localStorage:", error);
      return false;
    }
  };

  useEffect(() => {
    // Check if user has previously closed the popup with "Don't show again" checked
    const hasSeenPopup = getLocalStorageItem("hasSeenWelcomePopup");

    if (hasSeenPopup !== "true") {
      // Only show popup if user hasn't chosen not to see it again
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = (savePreference = false) => {
    setIsClosing(true);

    // Add a small delay for the closing animation
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);

      if (savePreference && dontShowAgain) {
        // Save preference to localStorage
        setLocalStorageItem("hasSeenWelcomePopup", "true");
      }
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity duration-300 backdrop-blur-sm ${
        isClosing ? "bg-opacity-0 backdrop-blur-none" : "bg-opacity-50"
      }`}
      onClick={() => closePopup(false)}
    >
      <div
        className={`glass bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        } animate-scale-in overflow-hidden`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <div className="relative overflow-hidden">
          {/* Decorative top gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 opacity-10 rounded-full transform translate-x-20 -translate-y-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500 opacity-10 rounded-full transform -translate-x-16 translate-y-16 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 right-0 w-24 h-24 bg-pink-500 opacity-10 rounded-full transform translate-x-12 animate-blob animation-delay-4000"></div>

          {/* Close button */}
          <button
            onClick={() => closePopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition duration-150 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-full p-2 shadow-md z-10 hover:shadow-lg transform hover:scale-105 hover:rotate-12"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center mb-6 animate-fade-in">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full mr-5 shadow-lg animate-pulse">
                <FaInfo className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white gradient-text-shine">
                {title}
              </h3>
            </div>

            {/* Content */}
            <div className="mb-8 animate-fade-in animation-delay-200">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {message}
              </p>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer group animate-fade-in animation-delay-300">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(e) => setDontShowAgain(e.target.checked)}
                  className="hidden"
                />
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-300 ${
                    dontShowAgain
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-600"
                      : "border-gray-300 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 bg-white dark:bg-gray-700"
                  }`}
                >
                  {dontShowAgain && (
                    <FaCheck className="text-white" size={12} />
                  )}
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                  Don't show again
                </span>
              </label>
              <button
                onClick={() => closePopup(true)}
                className="gradient-button flex items-center animate-fade-in animation-delay-400"
              >
                <span className="relative z-10">Get Started</span>
                <span className="ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">
                  <FaArrowRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
