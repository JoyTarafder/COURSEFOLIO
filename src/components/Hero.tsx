import React from "react";
import * as FaIcons from "react-icons/fa";

const Hero: React.FC = () => {
  const renderIcon = (iconName: string, size: number = 28) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, This is <span className="text-purple-600">Shantanu Karmaker</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            An Emerging Engineering Professional & A Slow Learner
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Hello and welcome to my engineering resource hub! I’m a passionate BSc student in Electrical and Electronics Engineering, dedicated to creating a comprehensive online space where study materials, projects, and a wide range of engineering books are readily available for future students. My journey in engineering has been fueled by curiosity and a drive to innovate, and over the years, I’ve gathered a wealth of knowledge through academic studies, hands-on projects, and collaborative research.

           This website is my way of giving back to the academic community—providing an accessible, well-organized repository that bridges the gap between theoretical learning and practical application. 
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition duration-300"
              >
                {renderIcon("FaLinkedin")}
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition duration-300"
              >
                {renderIcon("FaGithub")}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition duration-300"
              >
                {renderIcon("FaTwitter")}
              </a>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-30"></div>
              <div className="relative">
                <img
                  src="https://i.ibb.co.com/Lz3Mp6Hj/480684642-2468171563542410-1655804113549530908-n.jpg"
                  alt="Profile"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
