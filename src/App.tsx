import { useState } from "react";
import "./App.css";
import AllBooks from "./components/AllBooks";
import AllCourseFiles from "./components/AllCourseFiles";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import WelcomePopup from "./components/WelcomePopup";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Function to navigate between pages
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating between pages
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <Layout>
        {currentPage === "home" ? (
          <div className="App">
            <Header />
            <Hero />
            <Courses navigateTo={navigateTo} />
            <Books navigateTo={navigateTo} />
            <Cards />
            <Footer />

            {/* Include WelcomePopup directly */}
            <WelcomePopup
              title="Welcome to Course Folio!"
              message="Thank you for visiting our website. Explore our courses, books, and services to enhance your skills and knowledge. Use the search feature to find books, courses, and source code!"
            />
          </div>
        ) : currentPage === "courses" ? (
          <>
            <Header />
            <AllCourseFiles navigateTo={navigateTo} />
            <Footer />
          </>
        ) : currentPage === "books" ? (
          <>
            <Header />
            <AllBooks navigateTo={navigateTo} />
            <Footer />
          </>
        ) : null}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
