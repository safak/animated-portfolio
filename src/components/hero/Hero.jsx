import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scrollButton = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  };

  const sliderVariants = {
    initial: { x: "100%" },
    animate: {
      x: "-100%",
      transition: {
        duration: 25, // slower, subtle movement
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      },
    },
  };
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="wrapper">
        {/* Hero Text */}
        <motion.div
          className="textContainer"
          variants={container}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={item}>
            <span style={{ color: "white" }}> Hey,</span>i'm KAZIM SAIYED
          </motion.h2>
          <motion.h1 variants={item}>
            <span style={{ color: "rebeccapurple" }}>Web</span> Developer{" "}
            <span style={{ color: "rebeccapurple" }}>&</span> Designer
          </motion.h1>

          <motion.div className="buttonGroup">
            <motion.button
              variants={item}
              onClick={() => handleScroll("projects")}
            >
              See My Work
            </motion.button>
            <motion.button
              variants={item}
              onClick={() => handleScroll("contact")}
            >
              Contact Me
            </motion.button>

            <motion.img
              variants={scrollButton}
              initial="initial"
              animate="animate"
              src="/scroll.png"
              alt="Scroll down"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="imageContainer"
        >
          <img src="/img-hero.png" alt="Hero" loading="lazy" />
        </motion.div>
      </div>

      {/* Sliding Background Text */}
      <motion.div
        className="slidingText"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        DEVELOP DESIGN DEPLOY
      </motion.div>
    </section>
  );
};

export default Hero;
