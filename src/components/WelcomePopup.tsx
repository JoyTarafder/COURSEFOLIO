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
  // Always show the popup initially for testing
  const [isVisible, setIsVisible] = useState(true);
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
    // Reset localStorage for testing
    try {
      localStorage.removeItem("hasSeenWelcomePopup");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }

    // Always show the popup for now (for testing)
    setIsVisible(true);
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
      className={`fixed inset-0 flex items-center justify-center z-50 bg-black transition-opacity duration-300 ${
        isClosing ? "bg-opacity-0" : "bg-opacity-50"
      }`}
      onClick={() => closePopup(false)}
    >
      <div
        className={`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        <div className="relative p-6">
          {/* Close button */}
          <button
            onClick={() => closePopup(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition duration-150"
            aria-label="Close"
          >
            {renderIcon("FaTimes")}
          </button>

          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-full mr-4">
              {renderIcon("FaInfo", "text-white", 24)}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Welcome to Course Folio!
            </h3>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-600">{message}</p>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="w-5 h-5 accent-purple-600 rounded border-gray-300 focus:ring-purple-500"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-600">
                Don't show again
              </span>
            </label>
            <button
              onClick={() => closePopup(true)}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
