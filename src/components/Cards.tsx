import React from "react";
import * as FaIcons from "react-icons/fa";

interface Card {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  downloadUrl: string;
  fileType: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Create responsive and dynamic websites using the latest technologies and frameworks.",
    iconName: "FaCode",
    color: "from-blue-500 to-blue-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Design beautiful user interfaces with a focus on user experience and accessibility.",
    iconName: "FaPalette",
    color: "from-purple-500 to-purple-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
  {
    id: 3,
    title: "Mobile Development",
    description:
      "Build cross-platform mobile applications that work seamlessly on iOS and Android.",
    iconName: "FaMobile",
    color: "from-green-500 to-green-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
  {
    id: 4,
    title: "Performance Optimization",
    description:
      "Optimize your applications for speed, efficiency, and better user experience.",
    iconName: "FaRocket",
    color: "from-red-500 to-red-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
  {
    id: 5,
    title: "Full-Stack Development",
    description:
      "End-to-end solutions covering both frontend and backend development needs.",
    iconName: "FaLaptopCode",
    color: "from-yellow-500 to-yellow-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
  {
    id: 6,
    title: "Analytics Integration",
    description:
      "Implement analytics to track user behavior and improve your application.",
    iconName: "FaChartLine",
    color: "from-indigo-500 to-indigo-600",
    downloadUrl: "/files/sample.txt",
    fileType: "PDF",
  },
];

const Cards: React.FC = () => {
  const renderIcon = (iconName: string, size: number = 32) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? <IconComponent size={size} /> : null;
  };

  return (
    <section id="cards" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Source Code
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of services designed to help you build and grow
            your digital presence. Download resources for each service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${card.color} text-white mb-6`}
                >
                  {renderIcon(card.iconName)}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6">{card.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {card.fileType} File
                  </span>
                  <a
                    href={card.downloadUrl}
                    download
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md hover:from-purple-700 hover:to-indigo-700 transition duration-300"
                  >
                    {renderIcon("FaDownload", 16)}
                    <span className="ml-2">Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
