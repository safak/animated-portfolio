import Sidebar from "../siderbar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

export const Navbar = () => {
  return (
    <div className="navbar">
    {/*sidebar*/}
    <Sidebar/>
    
    <div className="wrapper">
      
      <div className="social">
        {/*<a href="#"><img src="/facebook1.png" alt="" /></a>
        <a href="#"><img src="/instagram1.png" alt="" /></a>*/}
        <a href="https://www.linkedin.com/in/zainab-al-masoodi-663873a0/"><img src="./linkedin.png" alt="" /></a>
        <a href="https://github.com/Zainab-Almasoodi"><img src="./github.png" alt="" /></a>

      </div>
    </div>
    </div>
  )
}
export default Navbar