import "./Hero.scss";
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
    y: 10,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slidingVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: -3500,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 35,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SAURAV SHARMA</motion.h2>
          <motion.h1 variants={textVariants}>
            {" "}
           Full Stack Web Developer 
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className="button2" variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll image"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingText"
        variants={slidingVariants}
        initial="initial"
        animate="animate"
      >
         Frontend & Backend 
      </motion.div>
      <div className="imgContainer">
        <img src="/hero1.png" alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
