import Links from "./links/Links";
import * as React from 'react'
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion,useCycle } from "framer-motion";
import { useState,useRef } from "react";
import { useDimensions } from "./dimensions/use-dimensions";

const variants={

  open:(height=1000)=>({
    clipPath:`circle(${height * 2 + 200}px at 40px 40px)`,
    transition:{type:"spring",
  stiffness:20,
resDelta:2}
  }),

closed:{
  clipPath:"circle(30px at 40px 40px)",
transition:{
  delay:0.5,
  type:"spring",
  stiffness:400,
  damping:40
}

}

}

const Sidebar = () => {
  const[isOpen, toggleOpen]=useCycle(false,true)
  const containerRef=useRef(null)
  const {height}=useDimensions(containerRef)
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar"
    initial={false}
    //animate={isOpen?"open":"closed"}
    custom={height}
    ref={containerRef}
    
    animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />

      </motion.div>
      <ToggleButton setOpen={setOpen} />
      {/* <ToggleButton toogle={()=>toggleOpen()}/> */}
    </motion.div>
  );
};

export default Sidebar;
