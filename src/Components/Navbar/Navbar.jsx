import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tanisha
        </motion.span>
        <div className="social">
          <a href="https://instagram.com/ishhh.sourav?igshid=ZGUzMzM3NWJiOQ==">
            <img src="/instagram1.png" alt="Instagram" />
          </a>

          <a href="https://wa.me/917667559570?text=Hi%20Saurav">
            <img src="/whatsapp.png" alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/in/saurav-sharma-%E2%9C%A8-69b07925b/">
            <img src="/linkedin.png" alt="Youtube" />
          </a>
          <a href="https://twitter.com/srvislearning">
            <img src="/twitter.png" alt="Dribble" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
