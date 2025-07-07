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
      duration: 20,
    },
  },
};

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Md. Tahmid Chowdhury</motion.h2>
          <motion.h1 variants={textVariants}>
            Building modern, scalable web apps with passion.
          </motion.h1>

          <motion.p variants={textVariants} className="tagline">
            I specialize in crafting responsive, full-stack applications using modern tools like React, Node.js, TypeScript, PHP, Laravel, Python and Django.
          </motion.p>

          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("projects")}
            >
              See My Work
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="Scroll down"
            className="scroll-indicator"
            onClick={() => scrollToSection("about")}
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer • Web Developer
      </motion.div>

      <div className="imageContainer">
        <img src="/hero.png" alt="Md. Tahmid Chowdhury Hero" />
      </div>
    </div>
  );
};

export default Hero;