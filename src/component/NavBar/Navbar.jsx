import React from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import SideBar from '../SideBar/SideBar';

export default function Navbar() {
  return (
    <nav>
      {/* Sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5}}
        >
            L'Rae Brantley
        </motion.span>
        <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
        </div>
      </div>
    </nav>
  )
}
