import React from "react";
import * as FaIcons from "react-icons/fa";

interface CourseFile {
  id: number;
  title: string;
  description: string;
  fileType: "pdf" | "word" | "excel";
  downloadUrl: string;
}

const courseFiles: CourseFile[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "Learn the basics of HTML, CSS, and JavaScript in this comprehensive guide.",
    fileType: "pdf",
    downloadUrl: "/files/sample.txt",
  },
  {
    id: 2,
    title: "React for Beginners",
    description:
      "Start your journey with React.js and build interactive user interfaces.",
    fileType: "word",
    downloadUrl: "/files/sample.txt",
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    description: "Master modern CSS with flexbox, grid, and animations.",
    fileType: "pdf",
    downloadUrl: "/files/sample.txt",
  },
  {
    id: 4,
    title: "TypeScript Essentials",
    description:
      "Enhance your JavaScript with static typing and advanced features.",
    fileType: "excel",
    downloadUrl: "/files/sample.txt",
  },
];

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

const Courses: React.FC = () => {
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

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Academic Course Files
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access all the course materials and resources to enhance your
            learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FileIcon fileType={file.fileType} />
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">
                    {file.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{file.description}</p>
                <a
                  href={file.downloadUrl}
                  download
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
                >
                  {renderIcon("FaDownload", "mr-2")}
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
