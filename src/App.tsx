import "./App.css";
import Books from "./components/Books";
import Cards from "./components/Cards";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Courses />
      <Books />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
