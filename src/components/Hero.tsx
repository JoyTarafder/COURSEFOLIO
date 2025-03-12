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
              Web Developer & Designer
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I'm passionate about creating beautiful, functional websites and
              applications. With over 5 years of experience in web development,
              I specialize in React, TypeScript, and modern CSS frameworks like
              Tailwind. I love solving complex problems and turning ideas into
              reality through clean, efficient code.
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
