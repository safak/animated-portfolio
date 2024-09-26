import "./Hero.scss";
import React from 'react';
import { motion } from "framer-motion";

const textVariants = {
    initial: {
      x: -500,
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
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
  }



const Hero = () => {


    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Hi, I'm Chinying!</motion.h2>
                    <motion.h1 variants={textVariants}>A Data Scientist</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                      <a href="#Experience"><motion.button  variants={textVariants} >About me</motion.button></a>
                      <a href="#Experience"><motion.button  variants={textVariants} >View my projects</motion.button></a>
                        {/* <motion.button  variants={textVariants} >Portfolio</motion.button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
                <div className="imageContainer">
                {/* <img src="/71.png" alt="" /> */}
                </div>


            </div>
            <motion.div className="slidingtextContainer"
                 variants={sliderVariants}
                 initial="initial"
                 animate="animate">
                hello hello hello hello
            </motion.div>
            
            
        </div>

    )};


export default Hero;