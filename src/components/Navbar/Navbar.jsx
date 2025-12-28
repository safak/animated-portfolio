import { useState, useEffect } from "react";
import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

// React icons
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", id: "Homepage" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

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

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="logo" onClick={() => handleScroll("Homepage")}>
          KAZIM SAIYED
        </span>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          {(menuOpen || windowWidth > 768) && (
            <motion.div
              className={`links ${menuOpen ? "active" : ""}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, idx) => (
                <div
                  key={idx}
                  className="nav-item"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <button onClick={() => handleScroll(link.id)}>
                    {link.name}
                  </button>

                  <AnimatePresence>
                    {hovered === idx && (
                      <motion.span
                        layoutId="hover-bg"
                        className="hover-bg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Social Icons */}
              {menuOpen && windowWidth <= 768 && (
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
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Social Icons */}
        {windowWidth > 768 && (
          <div className="social desktop-social">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.6 }}
                transition={{ type: "spring", stiffness: 1000 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
