import React, { useState } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      <button
        className={`toggle-button ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={toggleSidebar}>Home</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={toggleSidebar}>Services</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleSidebar}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
