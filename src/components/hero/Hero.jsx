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
    y: 10,
    transition: {
      duration: 2,
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
      repeatType: "mirror",
      duration: 40,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>JUSTICE UDEHEGBUNAM</motion.h2>
          <motion.h1 variants={textVariants}>
            React Frontend Web developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <button variants={textVariants}>See the Latest Works</button>
            <button variants={textVariants}>Contact Me</button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        The Developer your Website Needs!
      </motion.div>
      <div className="imageContainer">
        <img src="/myHero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
