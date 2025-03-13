import React from "react";
import * as FaIcons from "react-icons/fa";

const Hero: React.FC = () => {
  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 28
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-indigo-50 via-purple-50 to-white dark:from-gray-900 dark:via-indigo-950 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px] dark:bg-grid-white/[0.05]"></div>

        {/* Decorative particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-indigo-500 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="space-y-6">
              <div className="inline-block animate-fade-in">
                <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium">
                  Engineering Resource Hub
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight animate-fade-in animation-delay-200">
                Hi, This is{" "}
                <span className="gradient-text-shine">Shantanu Karmaker</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 animate-fade-in animation-delay-300">
                An Emerging Engineering Professional & A Slow Learner
              </h2>

              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full animate-fade-in animation-delay-400"></div>

              <div className="prose prose-lg dark:prose-invert max-w-none animate-fade-in animation-delay-500">
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Hello and welcome to my engineering resource hub! I'm a
                  passionate BSc student in Electrical and Electronics
                  Engineering, dedicated to creating a comprehensive online
                  space where study materials, projects, and a wide range of
                  engineering books are readily available for future students.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  This website is my way of giving back to the academic
                  community—providing an accessible, well-organized repository
                  that bridges the gap between theoretical learning and
                  practical application.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 animate-fade-in animation-delay-700">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:translate-y-1 group"
                  aria-label="LinkedIn"
                >
                  {renderIcon(
                    "FaLinkedin",
                    "text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                  )}
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:translate-y-1 group"
                  aria-label="GitHub"
                >
                  {renderIcon(
                    "FaGithub",
                    "text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300"
                  )}
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:translate-y-1 group"
                  aria-label="Twitter"
                >
                  {renderIcon(
                    "FaTwitter",
                    "text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                  )}
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-1000">
                <a
                  href="#courses"
                  className="gradient-button inline-flex items-center group"
                >
                  Explore Courses
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    {renderIcon("FaArrowRight", "", 16)}
                  </span>
                </a>
                <a
                  href="#books"
                  className="gradient-button-alt inline-flex items-center group"
                >
                  Browse Books
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    {renderIcon("FaBook", "", 16)}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/5 animate-fade-in animation-delay-500">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-200 dark:border-purple-800 animate-spin-slow"></div>
              <div className="absolute -inset-12 rounded-full border-2 border-dashed border-indigo-200 dark:border-indigo-800 animate-reverse-spin-slow"></div>

              {/* Profile image with glow */}
              <div className="relative flex justify-center">
                {/* Enhanced gradient glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
                
                {/* Hexagonal frame effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-full transform rotate-45 animate-spin-very-slow opacity-40"></div>
                
                <div className="relative glass rounded-full p-3 backdrop-blur-sm border border-white/20 shadow-2xl">
                  <img
                    src="https://i.ibb.co.com/Lz3Mp6Hj/480684642-2468171563542410-1655804113549530908-n.jpg"
                    alt="Profile"
                    className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/50 animate-float mx-auto z-10"
                  />

                  {/* Enhanced floating badges with improved positioning and effects */}
                  <div className="absolute -bottom-6 -right-6 glass rounded-full p-4 shadow-lg backdrop-blur-md border border-white/20 animate-float animation-delay-1000 hover:scale-110 transition-transform duration-300">
                    {renderIcon(
                      "FaCode",
                      "text-purple-600 dark:text-purple-400 animate-pulse-slow",
                      28
                    )}
                  </div>
                  <div className="absolute -top-4 -left-4 glass rounded-full p-3 shadow-lg backdrop-blur-md border border-white/20 animate-float animation-delay-2000 hover:scale-110 transition-transform duration-300">
                    {renderIcon(
                      "FaLaptopCode",
                      "text-indigo-600 dark:text-indigo-400 animate-pulse-slow",
                      24
                    )}
                  </div>
                  <div className="absolute top-1/2 -right-8 glass rounded-full p-3 shadow-lg backdrop-blur-md border border-white/20 animate-float animation-delay-3000 hover:scale-110 transition-transform duration-300">
                    {renderIcon(
                      "FaMicrochip",
                      "text-pink-600 dark:text-pink-400 animate-pulse-slow",
                      24
                    )}
                  </div>
                  <div className="absolute top-1/4 -left-8 glass rounded-full p-3 shadow-lg backdrop-blur-md border border-white/20 animate-float animation-delay-4000 hover:scale-110 transition-transform duration-300">
                    {renderIcon(
                      "FaRocket",
                      "text-blue-600 dark:text-blue-400 animate-pulse-slow",
                      24
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
