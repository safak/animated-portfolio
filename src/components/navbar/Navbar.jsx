import "./Navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/sidebar"

const Navbar = () =>{
    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">

                <motion.span 
                initial={{opacity:0 , scale:0.5}}
                animate={{opacity:1 , scale : 1}}
                transition={{duration: 0.5}}
                >
                AV DEVLOPER</motion.span>
                <div className="social">
                    <a href="#"><img src="./facebook.png"></img></a>
                    <a href="#"><img src="./instagram.png"></img></a>
                    <a href="#"><img src="./linkedin.webp"></img></a>
                    <a href="#"><img src="./github2.png"></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar