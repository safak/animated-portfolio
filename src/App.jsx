import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Element } from "react-scroll"; // Import Element for scrollable sections

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        <div>
          {/* Sections with scrollable targets */}
          <Element name="home" className="element">
            <Home />
          </Element>
          <Element name="services" className="element">
            <Services />
          </Element>
          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div>
      </div>
    </Router>
  );
}

export default App;
