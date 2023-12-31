import React from 'react';
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }} className="name">
                    Ishwar Sathe
                </motion.span>
                <div className="social">
                    <a href='#'><img src="/facebook.png" alt="Fb" /></a>
                    <a href='#'><img src="/instagram.png" alt="Insta" /></a>
                    <a href='#'><img src="/youtube.png" alt="Yt" /></a>
                    <a href='#'><img src="/dribbble.png" alt="Db" /></a>
                </div>
            </div>
        </div>
    )
}
