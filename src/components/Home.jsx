import React, { useState, useEffect } from "react";
import "./Home.css";
import anovosImage from "../assets/anovos.jpg"; // Import the image
import pythonLogo from "../assets/python.png"; // Import the Python logo
import terminalLogo from "../assets/terminal.png"; // Import the Terminal logo
import nodeLogo from "../assets/node.png"; // Import the Node.js logo
import databaseLogo from "../assets/database.png"; // Import the Database logo

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll event listener to check when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Trigger scroll effect after scrolling 100px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      <div className={`welcome-text ${scrolled ? "move-right" : ""}`}>
        <h1>Welcome to</h1>
        <p className="brand-name">ANOVOS</p>
        <h2 className="sub-heading">Grow your startup with</h2>
        <h2 className="anovos">ANOVOS</h2>
      </div>

      {/* Image Bar below the text */}
      <div className={`image-bar ${scrolled ? "move-right" : ""}`}>
        <img src={pythonLogo} alt="Python Logo" />
        <img src={terminalLogo} alt="Terminal Logo" />
        <img src={nodeLogo} alt="Node.js Logo" />
        <img src={databaseLogo} alt="Database Logo" />
      </div>

      <div className="image-container">
        <img src={anovosImage} alt="Anovos Logo" className="anovos-image" />
      </div>
    </div>
  );
};

export default Home;
