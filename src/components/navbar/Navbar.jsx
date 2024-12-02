import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100075233470329">
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/charmss987/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/charmee-gandhi-649196228/">
            <img className="linkedin" src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/charmee123">
            <img className="github" src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
