import { useRef } from "react";
import "./parallax.scss";
import {  motion, useScroll, useTransform } from "framer-motion";


const textVariants = {
  
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
   });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "100%"],);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: 
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
          
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "My Skills?" : "What I Did?"}
      </motion.h1>
     
     <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "skills" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>

      <div className="imageContainer">
        {type === "skills" 
        ? <motion.a variants={textVariants}animate="scrollButton" href="#SkillsL"><img src="/scroll.png" alt="" /></motion.a>
        : <motion.a variants={textVariants}animate="scrollButton" href="#ProjectsL"><img src="/scroll.png" alt="" /></motion.a>
        } 
     </div>
    </div>
  );
};

export default Parallax;