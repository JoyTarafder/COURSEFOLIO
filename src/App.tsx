import "./App.css";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Books />
      <Cards />
      <Footer />

      {/* Include WelcomePopup directly */}
      <WelcomePopup
        title="Welcome to Course Folio!"
        message="Thank you for visiting our website. Explore our courses, books, and services to enhance your skills and knowledge. Use the search feature to find books, courses, and source code!"
      />
    </div>
  );
}

export default App;
