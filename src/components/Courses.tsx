import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { courseFiles } from "../data/courseFilesData";

interface CoursesProps {
  navigateTo: (page: string) => void;
}

const FileIcon: React.FC<{ fileType: string }> = ({ fileType }) => {
  const renderIcon = (
    iconName: string,
    className: string,
    size: number = 24
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  switch (fileType) {
    case "pdf":
      return renderIcon("FaFilePdf", "text-red-500");
    case "word":
      return renderIcon("FaFileWord", "text-blue-500");
    case "excel":
      return renderIcon("FaFileExcel", "text-green-500");
    default:
      return null;
  }
};

const Courses: React.FC<CoursesProps> = ({ navigateTo }) => {
  const [hoveredFile, setHoveredFile] = useState<number | null>(null);

  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 24
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  const getFileColor = (fileType: string, fileId: number, color?: string) => {
    if (color) return color; // Use custom color if provided

    // Fallback colors based on fileId when no custom color is provided
    const idBasedColors = {
      1: "from-red-500 to-orange-500",
      2: "from-blue-500 to-cyan-500",
      3: "from-indigo-500 to-violet-500",
      4: "from-green-500 to-teal-500",
      5: "from-purple-500 to-purple-600",
      6: "from-yellow-500 to-amber-500",
    };

    return (
      idBasedColors[fileId as keyof typeof idBasedColors] || idBasedColors[1]
    ); // Default to first color if ID not found
  };

  const formatDownloads = (downloads: number) => {
    if (downloads >= 1000) {
      return `${(downloads / 1000).toFixed(1)}k`;
    }
    return downloads.toString();
  };

  return (
    <section
      id="courses"
      className="py-24 bg-gradient-to-b from-indigo-50/30 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:20px_20px] dark:bg-grid-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block animate-fade-in">
            <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm font-medium mb-4 inline-block">
              Educational Resources
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            Academic <span className="gradient-text">Course Files</span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Access comprehensive course materials and resources to enhance your
            learning journey. Download guides, tutorials, and practice
            materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courseFiles.slice(0, 4).map((file, index) => (
            <div
              key={file.id}
              className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredFile(file.id)}
              onMouseLeave={() => setHoveredFile(null)}
            >
              <div
                className={`h-2 bg-gradient-to-r ${getFileColor(
                  file.fileType,
                  file.id,
                  file.color
                )}`}
              ></div>
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${getFileColor(
                      file.fileType,
                      file.id,
                      file.color
                    )} text-white shadow-lg transform transition-transform duration-500 ${
                      hoveredFile === file.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <FileIcon fileType={file.fileType} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {file.title}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        {file.fileType.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                        {renderIcon("FaDownload", "mr-1", 12)}
                        {formatDownloads(file.downloads)} downloads
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl">
                  <p className="text-gray-600 dark:text-gray-300">
                    {file.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      {renderIcon("FaClock", "mr-1", 14)}
                      <span className="text-sm">{file.lastUpdated}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      {renderIcon("FaFileAlt", "mr-1", 14)}
                      <span className="text-sm">{file.size}</span>
                    </div>
                  </div>
                  <a
                    href={file.downloadUrl}
                    download
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${getFileColor(
                      file.fileType,
                      file.id,
                      file.color
                    )} text-white rounded-xl font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group`}
                  >
                    {renderIcon(
                      "FaDownload",
                      "mr-2 group-hover:animate-bounce",
                      16
                    )}
                    <span>Download Now</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in animation-delay-700">
          <button
            onClick={() => navigateTo("courses")}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <span>Browse All Course Files</span>
            {renderIcon(
              "FaArrowRight",
              "ml-2 group-hover:translate-x-1 transition-transform",
              16
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
