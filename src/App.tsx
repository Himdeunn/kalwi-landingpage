import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonial from "./pages/Testimonial";
import Tutorial from "./pages/Tutorial";
import Footer from "./pages/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Testimonial />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default App;
