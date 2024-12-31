import React from "react";
import "./hero.scss";
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
    y: 20,
    transition: {
      duration: 2,
      delay: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      duration: 20,
      repeatType: "mirror",
    },
  },
};
const heroVariants = {
  initial: {
    x: 0,
    y: "220%",
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="container1">
        <div className="row">
          <motion.div
            className="col-md-6 title"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h2 className="text-9xl font-bold" variants={textVariants}>
              JISHNU PN
            </motion.h2>
            <motion.h1 variants={textVariants}>
              Full Stack Developer &<br /> AI ML Enthusiast
            </motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button
                type="button"
                class="btn btn-outline-light"
                variants={textVariants}
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </motion.button>
              <a href="#Contact" className="z-1">
                <motion.button
                  type="button"
                  class="btn btn-light"
                  variants={textVariants}
                >
                  Contact Me!
                </motion.button>
              </a>
            </motion.div>
            <motion.img
              src="/scroll.png"
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>
          <div className="col-md-6 image">
            <motion.img
              src="/Jishnu3.png"
              alt="Jishnu"
              variants={heroVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <motion.div
            className="SlidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            Software Developer Engineer
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
