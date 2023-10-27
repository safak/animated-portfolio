import "./hero.scss"
import { motion } from "framer-motion"

const textVariant = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0.2,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div 
                className="textContainer" 
                variants={textVariant}
                initial= "initial"
                animate= "animate"
                >
                <motion.h2 variants={textVariant}>Gianfranco Navas F</motion.h2>
                <motion.h1 variants={textVariant}>Web developer</motion.h1>
                <motion.div variants={textVariant} className="buttons">
                    <motion.button variants={textVariant}>Latest Works</motion.button>
                    <motion.button variants={textVariant}>Contact Me</motion.button>
                </motion.div>
                <motion.img 
                    variants={textVariant}
                    animate="scrollButton"
                    src="/scroll.png" 
                    alt="" 
                />
            </motion.div>
        </div>
        <div className="slidingTextContainer">
            Digital Navas
        </div>
        <div className="imageContainer">
            <img width="700px" height="" src="/personal-hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero