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

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pt-20 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">
            Search Results for "{query}"
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition duration-150"
            aria-label="Close"
          >
            {renderIcon("FaTimes")}
          </button>
        </div>

        <div className="overflow-y-auto p-4 max-h-[calc(80vh-64px)]">
          {results.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-gray-400 mb-2">
                {renderIcon("FaSearch", "mx-auto", 48)}
              </div>
              <p className="text-gray-600">
                No results found for "{query}". Try a different search term.
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {results.map((item) => (
                <li key={item.id} className="py-4">
                  <a
                    href={item.url}
                    className="block hover:bg-gray-50 rounded-lg p-3 transition duration-150"
                  >
                    <div className="flex items-center mb-1">
                      <span className="mr-2">{getTypeIcon(item.type)}</span>
                      <span className="text-sm text-gray-500 capitalize">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
