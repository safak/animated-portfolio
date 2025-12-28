import React from "react";
import "./Footer.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const socialLinks = [
    { href: "https://github.com/kazim02", icon: <FaGithub /> },
    {
      href: "https://www.linkedin.com/in/kazim-mehdi-saiyed-7263a7246/",
      icon: <FaLinkedin />,
    },
    { href: "https://www.instagram.com/kazim.webdev/", icon: <FaInstagram /> },
    { href: "https://www.facebook.com/kazim.webdev/", icon: <FaFacebook /> },
    { href: "https://x.com/FahmKazim23377", icon: <FaXTwitter /> },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left side - brand / short info */}
        <div className="footer-about">
          <h2>KAZIM SAIYED </h2>
          <p>
            MERN Stack Developer passionate about building clean, scalable, and
            modern web applications. 
           <br /> Let's connect and bring ideas to life!
          </p>
        </div>

        {/* Middle - navigation links */}

        {/* Right side - social media */}

        <motion.div
          className="social mobile-social"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KAZIM SAIYED. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
