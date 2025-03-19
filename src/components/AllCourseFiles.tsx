import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { CourseFile, courseFiles } from "../data/courseFilesData";

interface AllCourseFilesProps {
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

const AllCourseFiles: React.FC<AllCourseFilesProps> = ({ navigateTo }) => {
  const [hoveredFile, setHoveredFile] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredFiles, setFilteredFiles] = useState<CourseFile[]>(courseFiles);
  const [selectedFileType, setSelectedFileType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [visibleFiles, setVisibleFiles] = useState<CourseFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setIsLoading(true);

    // Filter files based on search term and file type
    let result = [...courseFiles];

    if (searchTerm.trim() !== "") {
      result = result.filter(
        (file) =>
          file.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          file.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFileType !== "all") {
      result = result.filter((file) => file.fileType === selectedFileType);
    }

    // Sort files
    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "downloads":
        result.sort((a, b) => b.downloads - a.downloads);
        break;
      case "date":
        result.sort(
          (a, b) =>
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
        );
        break;
      default:
        // Default sorting by ID
        result.sort((a, b) => a.id - b.id);
    }

    setFilteredFiles(result);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      setVisibleFiles(result);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedFileType, sortBy]);

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
      7: "from-red-500 to-yellow-500",
      8: "from-blue-400 to-indigo-600",
      9: "from-teal-400 to-blue-500",
      10: "from-purple-400 to-pink-500",
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
    <section className="py-24 bg-gradient-to-b from-purple-50/30 via-indigo-50/20 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 relative overflow-hidden min-h-screen">
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
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium mb-4 inline-block">
              Complete Collection
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 mt-4 animate-fade-in animation-delay-200">
            All{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Course Files
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-6 animate-fade-in animation-delay-300"></div>

          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Browse through our complete collection of course materials and
            academic resources to support your learning journey. Download what
            you need for your studies.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-12 max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-6 backdrop-blur-sm animate-fade-in animation-delay-500">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative col-span-1 md:col-span-3 mb-4">
              <div className="relative">
                {renderIcon(
                  "FaSearch",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  18
                )}
                <input
                  type="text"
                  placeholder="Search course files..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    onClick={() => setSearchTerm("")}
                  >
                    {renderIcon("FaTimes", "", 18)}
                  </button>
                )}
              </div>
            </div>

            {/* File Type Filter */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                File Type
              </label>
              <div className="relative">
                {renderIcon(
                  "FaFilter",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={selectedFileType}
                  onChange={(e) => setSelectedFileType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="pdf">PDF</option>
                  <option value="word">Word</option>
                  <option value="excel">Excel</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Sort By
              </label>
              <div className="relative">
                {renderIcon(
                  "FaSort",
                  "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400",
                  16
                )}
                <select
                  className="w-full pl-12 pr-10 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-700 dark:text-gray-200 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="title">Title (A-Z)</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="date">Recently Updated</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  {renderIcon("FaChevronDown", "text-gray-400", 16)}
                </div>
              </div>
            </div>

            {/* Results Counter */}
            <div className="col-span-1 flex items-end">
              <div className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center">
                  {renderIcon("FaFileAlt", "mr-2 text-purple-500", 16)}
                  {filteredFiles.length}{" "}
                  {filteredFiles.length === 1 ? "file" : "files"} found
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {isLoading ? (
          <div className="flex justify-center items-center py-32">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
          </div>
        ) : visibleFiles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleFiles.map((file, index) => (
              <div
                key={file.id}
                className="glass bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100 + 600}ms` }}
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
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${getFileColor(
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
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1">
                        {file.title}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          {file.fileType.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          {renderIcon("FaDownload", "mr-1", 10)}
                          {formatDownloads(file.downloads)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {file.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                        {renderIcon("FaClock", "mr-1", 12)}
                        <span>{file.lastUpdated}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                        {renderIcon("FaFileAlt", "mr-1", 12)}
                        <span>{file.size}</span>
                      </div>
                    </div>
                    <a
                      href={file.downloadUrl}
                      download
                      className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${getFileColor(
                        file.fileType,
                        file.id,
                        file.color
                      )} text-white rounded-lg text-sm font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group`}
                    >
                      {renderIcon(
                        "FaDownload",
                        "mr-1 group-hover:animate-bounce",
                        12
                      )}
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/60 dark:bg-gray-800/60 rounded-2xl backdrop-blur-sm shadow-lg max-w-2xl mx-auto">
            <div className="flex justify-center mb-6 text-gray-400 dark:text-gray-500">
              {renderIcon("FaSearchMinus", "", 64)}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
              No course files found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We couldn't find any course files matching your criteria. Try
              adjusting your search or filters.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedFileType("all");
                setSortBy("default");
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium transition duration-300 hover:shadow-lg"
            >
              {renderIcon("FaUndoAlt", "mr-2", 16)}
              Reset Filters
            </button>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="mt-16 text-center animate-fade-in animation-delay-700">
          <button
            onClick={() => navigateTo("home")}
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-500 rounded-full font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            {renderIcon(
              "FaArrowLeft",
              "mr-2 group-hover:-translate-x-1 transition-transform",
              16
            )}
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllCourseFiles;
