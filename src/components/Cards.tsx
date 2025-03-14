import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

interface Card {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  downloadUrl: string;
  fileType: string;
  technologies: string[];
  lastUpdated: string;
  size: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Create responsive and dynamic websites using the latest technologies and frameworks.",
    iconName: "FaCode",
    color: "from-blue-500 to-blue-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["HTML5", "CSS3", "JavaScript", "React"],
    lastUpdated: "July 5, 2023",
    size: "2.8 MB",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design beautiful user interfaces with a focus on user experience and accessibility.",
    iconName: "FaPalette",
    color: "from-purple-500 to-purple-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Figma", "Adobe XD", "Tailwind CSS"],
    lastUpdated: "June 28, 2023",
    size: "1.5 MB",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Build cross-platform mobile applications that work seamlessly on iOS and Android.",
    iconName: "FaMobile",
    color: "from-green-500 to-green-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["React Native", "Flutter", "Firebase"],
    lastUpdated: "July 1, 2023",
    size: "3.2 MB",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Optimize your applications for speed, efficiency, and better user experience.",
    iconName: "FaRocket",
    color: "from-red-500 to-red-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Webpack", "Lighthouse", "PWA"],
    lastUpdated: "June 25, 2023",
    size: "1.8 MB",
  },
  {
    id: 5,
    title: "Principal of Power System",
    description:
      "Detailed explanation of the principles of power systems and their applications.",
    iconName: "FaLaptopCode",
    color: "from-yellow-500 to-yellow-600",
    downloadUrl: "/files/Principles of Power System -- V K Mehta, Rohit Mehta.pdf",
    fileType: "BOOK",
    technologies: ["Transmission Line", "Bundle Conductor", "Types of Insulator", "Voltage Distribution"],
    lastUpdated: "March 14, 2025",
    size: "35 MB",
  },
  {
    id: 6,
    title: "Analytics Integration",
    description:
      "Implement analytics to track user behavior and improve your application.",
    iconName: "FaChartLine",
    color: "from-indigo-500 to-indigo-600",
    downloadUrl: "/files/source-code.pdf",
    fileType: "Source Code",
    technologies: ["Google Analytics", "Mixpanel", "Segment"],
    lastUpdated: "June 30, 2023",
    size: "2.1 MB",
  },
];

const Cards: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 32
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  return (
    <section
      id="cards"
      className="py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] dark:bg-grid-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4 inline-block">
              Development Resources
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            Source <span className="gradient-text">Code</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Explore our collection of source code examples and starter projects.
            Download and use these resources to accelerate your development
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-8">
                <div className="flex items-start space-x-6 mb-6">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${
                      card.color
                    } text-white shadow-lg transform transition-transform duration-500 ${
                      hoveredCard === card.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    {renderIcon(card.iconName, "animate-pulse")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {renderIcon("FaCode", "text-blue-500", 14)}
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {card.fileType}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl p-4 mb-6">
                  <p className="text-gray-600 dark:text-gray-300">
                    {card.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Technologies Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {card.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${card.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      {renderIcon("FaClock", "mr-1", 14)}
                      <span className="text-sm">{card.lastUpdated}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      {renderIcon("FaFileArchive", "mr-1", 14)}
                      <span className="text-sm">{card.size}</span>
                    </div>
                  </div>
                  <a
                    href={card.downloadUrl}
                    download
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${card.color} text-white rounded-xl font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group`}
                  >
                    {renderIcon(
                      "FaDownload",
                      "mr-2 group-hover:animate-bounce",
                      16
                    )}
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in animation-delay-700">
          <a
            href="/source-code"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <span>Browse All Source Code</span>
            {renderIcon(
              "FaArrowRight",
              "ml-2 group-hover:translate-x-1 transition-transform",
              16
            )}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cards;
