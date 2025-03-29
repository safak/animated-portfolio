import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariables = {
  initial: {
    x:-500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
};

const slideVariables = {
  initial: {
    x:0,
   
  },
  animate: {
    x: "-620%",
    opacity: 1,
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
      staggerChildren: 0.1,
    },
  },

 
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariables}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariables}>Shahzad akram</motion.h2>
          <motion.h1 variants={textVariables}>Web Developer & Data Analyst</motion.h1>
          <motion.div variants={textVariables} className="buttons">
            <motion.button variants={textVariables}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}>
              See the latest work
            </motion.button>
            <motion.button 
              variants={textVariables}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              >Contact Me</motion.button>
          </motion.div>

          <motion.img variants={textVariables} animate="scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
        {/* //for marque  */}
        <motion.div  variants={slideVariables} initial="initial" animate="animate" className="slidingTextContainer">
          Passionate Front-End Developer
        </motion.div>

        <div className="imageContainer">
          <img src="./hero2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
