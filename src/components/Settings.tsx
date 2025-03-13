import { FaBolt } from "@react-icons/all-files/fa/FaBolt";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaPalette } from "@react-icons/all-files/fa/FaPalette";
import { FaRegCircle } from "@react-icons/all-files/fa/FaRegCircle";
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ isOpen, onClose }) => {
  const {
    isDarkMode,
    toggleTheme,
    colorScheme,
    setColorScheme,
    animationLevel,
    setAnimationLevel,
  } = useTheme();

  // Available color schemes
  const colorSchemes = [
    { id: "blue" as const, name: "Blue", color: "bg-blue-500" },
    { id: "purple" as const, name: "Purple", color: "bg-purple-500" },
    { id: "teal" as const, name: "Teal", color: "bg-teal-500" },
    { id: "pink" as const, name: "Pink", color: "bg-pink-500" },
    { id: "amber" as const, name: "Amber", color: "bg-amber-500" },
  ] as const;

  // Theme modes
  const themeModes = [
    { id: "light", name: "Light", icon: <FaSun size={18} /> },
    { id: "dark", name: "Dark", icon: <FaMoon size={18} /> },
  ];

  // Animation levels
  const animationLevels = [
    {
      id: "minimal" as const,
      name: "Minimal",
      icon: <FaRegCircle size={18} />,
    },
    {
      id: "moderate" as const,
      name: "Moderate",
      icon: <FaRegLightbulb size={18} />,
    },
    { id: "full" as const, name: "Full", icon: <FaBolt size={18} /> },
  ] as const;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="glass dark:bg-gray-800/90 bg-white/90 rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            Customize Experience
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close settings"
          >
            <FaTimes className="text-gray-600 dark:text-gray-300" size={20} />
          </button>
        </div>

        {/* Theme Mode Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <FaSun className="text-amber-500" size={18} />
            Theme Mode
          </h3>
          <div className="flex gap-2">
            {themeModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  if (
                    (mode.id === "light" && isDarkMode) ||
                    (mode.id === "dark" && !isDarkMode)
                  ) {
                    toggleTheme();
                  }
                }}
                className={`flex-1 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  (mode.id === "light" && !isDarkMode) ||
                  (mode.id === "dark" && isDarkMode)
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span>{mode.icon}</span>
                {mode.name}
                {(mode.id === "light" && !isDarkMode) ||
                (mode.id === "dark" && isDarkMode) ? (
                  <FaCheck size={14} className="text-blue-500" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Color Scheme Selection */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <FaPalette className="text-pink-500" size={18} />
            Color Scheme
          </h3>
          <div className="grid grid-cols-5 gap-2">
            {colorSchemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => setColorScheme(scheme.id)}
                className={`aspect-square rounded-full ${
                  scheme.color
                } flex items-center justify-center transition-transform ${
                  colorScheme === scheme.id
                    ? "ring-2 ring-offset-2 dark:ring-offset-gray-800 ring-blue-500 scale-110"
                    : "hover:scale-105"
                }`}
                aria-label={`Set ${scheme.name} theme`}
                title={scheme.name}
              >
                {colorScheme === scheme.id && (
                  <FaCheck className="text-white" size={14} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Animation Level Selection */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-gray-800 dark:text-gray-200">
            <FaBolt className="text-amber-500" size={18} />
            Animation Level
          </h3>
          <div className="flex gap-2">
            {animationLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setAnimationLevel(level.id)}
                className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  animationLevel === level.id
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <span>{level.icon}</span>
                {level.name}
                {animationLevel === level.id ? (
                  <FaCheck size={14} className="text-blue-500" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
          Settings are automatically saved to your browser.
        </p>
      </div>
    </div>
  );
};

export default Settings;
