import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
function Navbar() {
  return (
    <div>
      <Sidebar />
      <motion.div
        className="navbar"
        animate={{ y: [-100, 0] }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="wrapper">
          <motion.span
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            JISHNU NEEL
          </motion.span>
          <div className="socials">
            <motion.a
              href="https://github.com/jishnupn04"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
            >
              <img src="/github2.png" alt="GitHub" />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
              href="https://linkedin.com/in/jishnu-pn-6822762a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.4,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
              }}
              href="https://www.instagram.com/jishnu_neel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" alt="Instagram" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
