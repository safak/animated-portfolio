import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}}
                             animate={{opacity:1, scale:0.5}}
                             transition={{duration:0.5}}>chinying</motion.span>
                <div className="social">
                    <a href="#"><img src="/linkedin.png" alt=""/></a>
                    <a href="#"><img src="/github.png" alt=""/></a>
                    {/* <a href="#"><img src="/youtube.png" alt=""/></a>
                    <a href="#"><img src="/dribbble.png" alt=""/></a> */}
                </div>
            </div>
        </div>
    )
};

export default Navbar;