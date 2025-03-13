import React from "react";
import * as FaIcons from "react-icons/fa";

// Define types for search results
interface SearchItem {
  id: string;
  title: string;
  type: "book" | "course" | "source";
  description: string;
  url: string;
}

interface SearchResultsProps {
  query: string;
  results: SearchItem[];
  isVisible: boolean;
  onClose: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  results,
  isVisible,
  onClose,
}) => {
  if (!isVisible) return null;

  const renderIcon = (
    iconName: string,
    className: string = "",
    size: number = 20
  ) => {
    const IconComponent = FaIcons[iconName as keyof typeof FaIcons];
    return IconComponent ? (
      <IconComponent className={className} size={size} />
    ) : null;
  };

  // Get icon based on result type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "book":
        return renderIcon("FaBook", "text-blue-500", 16);
      case "course":
        return renderIcon("FaGraduationCap", "text-green-500", 16);
      case "source":
        return renderIcon("FaCode", "text-purple-500", 16);
      default:
        return renderIcon("FaFile", "text-gray-500", 16);
    }
  };

  // Get background color based on result type
  const getTypeBgColor = (type: string) => {
    switch (type) {
      case "book":
        return "bg-blue-50";
      case "course":
        return "bg-green-50";
      case "source":
        return "bg-purple-50";
      default:
        return "bg-gray-50";
    }
  };

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pt-20 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden transform transition-all duration-300 scale-100">
        <div className="flex justify-between items-center p-6 border-b bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <h3 className="text-xl font-semibold flex items-center">
            {renderIcon("FaSearch", "mr-3", 20)}
            Search Results for "{query}"
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition duration-150 bg-white bg-opacity-20 rounded-full p-2"
            aria-label="Close"
          >
            {renderIcon("FaTimes")}
          </button>
        </div>

        <div className="overflow-y-auto p-6 max-h-[calc(80vh-80px)]">
          {results.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4 bg-gray-100 p-6 rounded-full inline-block">
                {renderIcon("FaSearch", "mx-auto", 48)}
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                No results found
              </h4>
              <p className="text-gray-600">
                No results found for "{query}". Try a different search term.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-gray-500 mb-4">
                {results.length} results found
              </p>
              <ul className="space-y-4">
                {results.map((item) => (
                  <li
                    key={item.id}
                    className="transition-all duration-300 hover:translate-x-1"
                  >
                    <a
                      href={item.url}
                      className={`block rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${getTypeBgColor(
                        item.type
                      )}`}
                    >
                      <div className="flex items-center mb-2">
                        <span className="mr-2 bg-white p-2 rounded-full shadow-sm">
                          {getTypeIcon(item.type)}
                        </span>
                        <span className="text-sm font-medium text-gray-500 capitalize bg-white px-3 py-1 rounded-full shadow-sm">
                          {item.type}
                        </span>
                      </div>
                      <h4 className="font-medium text-lg text-gray-900 mb-1 flex items-center justify-between">
                        {item.title}
                        <span className="text-purple-600">
                          {renderIcon("FaArrowRight", "", 14)}
                        </span>
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
