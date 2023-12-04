import Sidebar from "../Sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.3}}
        >
          Art-Place
          </motion.span>
        <div className="social">
            <a href="#"><img src="/facebook.png"></img></a>
            <a href="#"><img src="/instagram.png"></img></a>
            <a href="#"><img src="/youtube.png"></img></a>
            <a href="#"><img src="/dribbble.png"></img></a>

        </div>
      </div>
    </div>
  )
}

export default Navbar
