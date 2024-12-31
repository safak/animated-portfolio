import React, { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yText=useTransform(scrollYProgress,[0,1],["0%","200%"])
  const yImg=useTransform(scrollYProgress,[0,1],["0%","100%"])
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "about"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.div className="parallax__content" style={{y:yText}}>
        {type === "about" ? (
          <h1>About Me</h1>
        ) : (
          <h1>Stuffs I Did</h1>
        )}
      </motion.div>
      <div className="mountains"></div>
      <motion.div style={{
        y:yImg,
        backgroundImage:`url(${type==="about" ? ("/planets.png") : ("/sun.png")})`
        
        }} className="planets"></motion.div>
      <motion.div style={{x:yImg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
