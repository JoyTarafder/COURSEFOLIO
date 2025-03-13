import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";
type AnimationLevel = "minimal" | "moderate" | "full";
type ColorScheme = "blue" | "purple" | "teal" | "pink" | "amber";

interface ThemeContextType {
  themeMode: ThemeMode;
  isDarkMode: boolean;
  colorScheme: ColorScheme;
  animationLevel: AnimationLevel;
  setThemeMode: (mode: ThemeMode) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  setAnimationLevel: (level: AnimationLevel) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem("themeMode");
    return (savedTheme as ThemeMode) || "system";
  });

  const [colorScheme, setColorScheme] = useState<ColorScheme>(() => {
    const savedScheme = localStorage.getItem("colorScheme");
    return (savedScheme as ColorScheme) || "purple";
  });

  const [animationLevel, setAnimationLevel] = useState<AnimationLevel>(() => {
    const savedLevel = localStorage.getItem("animationLevel");
    return (savedLevel as AnimationLevel) || "full";
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Apply theme based on system preference if in system mode
  useEffect(() => {
    const applyTheme = () => {
      let shouldUseDark = false;

      if (themeMode === "system") {
        shouldUseDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
      } else {
        shouldUseDark = themeMode === "dark";
      }

      setIsDarkMode(shouldUseDark);

      if (shouldUseDark) {
        document.documentElement.classList.add("dark-theme");
        document.documentElement.classList.remove("light-theme");
      } else {
        document.documentElement.classList.add("light-theme");
        document.documentElement.classList.remove("dark-theme");
      }
    };

    applyTheme();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (themeMode === "system") {
        applyTheme();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [themeMode]);

  // Apply color scheme
  useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", colorScheme);
    localStorage.setItem("colorScheme", colorScheme);
  }, [colorScheme]);

  // Apply animation level
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-animation-level",
      animationLevel
    );
    localStorage.setItem("animationLevel", animationLevel);
  }, [animationLevel]);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "system";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        themeMode,
        isDarkMode,
        colorScheme,
        animationLevel,
        setThemeMode,
        setColorScheme,
        setAnimationLevel,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeContext;
