import { FaCog } from "@react-icons/all-files/fa/FaCog";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Settings from "./Settings";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode, colorScheme, animationLevel, toggleTheme } = useTheme();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
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

  // Calculate parallax effect for decorative elements
  const parallaxStyle = (depth: number) => ({
    transform: `translate(${mousePosition.x / (depth * 100)}px, ${
      mousePosition.y / (depth * 100)
    }px)`,
  });

  // Determine if animations should be shown based on user preference
  const showAnimations = animationLevel !== "minimal";
  const showFullAnimations = animationLevel === "full";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base gradient background */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-br from-white via-gray-50 to-white"
          }`}
        ></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-white dark:bg-grid-black opacity-[0.03] dark:opacity-[0.05]"></div>

        {/* Interactive gradient that follows mouse */}
        {showAnimations && (
          <div
            className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${
                mousePosition.y
              }px, ${
                isDarkMode
                  ? "rgba(59, 130, 246, 0.15)"
                  : "rgba(59, 130, 246, 0.1)"
              }, transparent 30%)`,
            }}
          ></div>
        )}

        {/* Animated gradient orbs */}
        {showFullAnimations && (
          <>
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-1000"
              style={{
                ...parallaxStyle(2),
                background: `radial-gradient(circle, ${
                  colorScheme === "purple"
                    ? "rgba(139, 92, 246, 0.8)"
                    : colorScheme === "blue"
                    ? "rgba(59, 130, 246, 0.8)"
                    : colorScheme === "teal"
                    ? "rgba(20, 184, 166, 0.8)"
                    : colorScheme === "pink"
                    ? "rgba(236, 72, 153, 0.8)"
                    : "rgba(245, 158, 11, 0.8)"
                }, transparent)`,
              }}
            ></div>
            <div
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"
              style={{
                ...parallaxStyle(3),
                background: `radial-gradient(circle, ${
                  colorScheme === "purple"
                    ? "rgba(168, 85, 247, 0.8)"
                    : colorScheme === "blue"
                    ? "rgba(37, 99, 235, 0.8)"
                    : colorScheme === "teal"
                    ? "rgba(13, 148, 136, 0.8)"
                    : colorScheme === "pink"
                    ? "rgba(219, 39, 119, 0.8)"
                    : "rgba(217, 119, 6, 0.8)"
                }, transparent)`,
              }}
            ></div>
            <div
              className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"
              style={{
                ...parallaxStyle(1.5),
                background: `radial-gradient(circle, ${
                  colorScheme === "purple"
                    ? "rgba(124, 58, 237, 0.8)"
                    : colorScheme === "blue"
                    ? "rgba(29, 78, 216, 0.8)"
                    : colorScheme === "teal"
                    ? "rgba(15, 118, 110, 0.8)"
                    : colorScheme === "pink"
                    ? "rgba(190, 24, 93, 0.8)"
                    : "rgba(180, 83, 9, 0.8)"
                }, transparent)`,
              }}
            ></div>
          </>
        )}

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">{children}</div>

      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-lg transform hover:scale-110 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-500" size={20} />
        ) : (
          <FaMoon className="text-indigo-600" size={20} />
        )}
      </button>

      {/* Settings button */}
      <button
        onClick={() => setIsSettingsOpen(!isSettingsOpen)}
        className="fixed bottom-6 right-20 z-50 p-3 rounded-full glass bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-lg transform hover:scale-110 transition-all duration-300"
        aria-label="Settings"
      >
        <FaCog
          className={`text-gray-600 dark:text-gray-300 ${
            isSettingsOpen ? "animate-spin-slow" : ""
          }`}
          size={20}
        />
      </button>

      {/* Back to top button - appears when scrolled down */}
      {scrollPosition > 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-34 z-50 p-3 rounded-full glass bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-lg transform hover:scale-110 transition-all duration-300 animate-fade-in"
          aria-label="Back to top"
        >
          <span className="text-gray-600 dark:text-gray-300 text-xl font-bold">
            ↑
          </span>
        </button>
      )}

      {/* Settings panel */}
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default Layout;
