import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from "../sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>Yuva</motion.span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="fb" /></a>
          <a href="#"><img src="/instagram.png" alt="insta" /></a>
          <a href="#"><img src="/youtube.png" alt="youtube" /></a>
          <a href="#"><img src="/dribbble.png" alt="dribb" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
