import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Contact.css'; // Import a separate CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h1 className="animate-text">Contact To ANOVOS</h1>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
