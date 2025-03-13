import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

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

  // Render icon helper function
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
        className={`bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <div className="relative overflow-hidden">
          {/* Decorative top gradient */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

          {/* Close button */}
          <button
            onClick={() => closePopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150 bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Close"
          >
            {renderIcon("FaTimes")}
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-full mr-5 shadow-lg">
                {renderIcon("FaInfo", "text-white", 24)}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            </div>

            {/* Content */}
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">{message}</p>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
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
                      : "border-gray-300 hover:border-purple-400 bg-white"
                  }`}
                >
                  {dontShowAgain && renderIcon("FaCheck", "text-white", 12)}
                </div>
                <span className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  Don't show again
                </span>
              </label>
              <button
                onClick={() => closePopup(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center"
              >
                Get Started
                <span className="ml-2">
                  {renderIcon("FaArrowRight", "", 14)}
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
