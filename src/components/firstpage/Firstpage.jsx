import "./firstpage.scss"
import { motion } from "framer-motion";

import { HashLink } from 'react-router-hash-link';


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
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Firstpage = () => {
 
  return (
    <div className="firstpage">
      
      <div className="wrapper">
      <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
        <motion.h2 variants={textVariants}>ZAINAB AL-MASOODI</motion.h2>
        <motion.h1 variants={textVariants}>Web Developer</motion.h1>
        <motion.p variants={textVariants}>I design and code beautifully simple things, and I love what I do.
        <br/>I’m currently learning about anything and everything around JavaScript.
        <br/>I'm open to Job opportunities where I can contribute, learn and grow.
         If you have a good opportunity that matches my skills and experience then do not hesitate to contact me.</motion.p>
        <motion.div variants={textVariants} className="buttons">
          {/*<motion.button variants={textVariants}><HashLink to={"#Protfolio"}>My projects</HashLink></motion.button>*/}
          <motion.button  variants={textVariants} ><HashLink to={"#Contacts"}>Contacts</HashLink></motion.button>
        </motion.div>
        <motion.a variants={textVariants}animate="scrollButton" href="#My Skills"><img src="/scroll.png" alt="" /></motion.a>
       
      </motion.div>
      </div>
      
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Welcome to my Protfolio
      </motion.div>
      
        <div className="imageContainer">
            <img src="./p1.png" alt=""/>
        </div>

    </div>
  )
}

export default Firstpage