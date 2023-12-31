import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
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
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        },
    },
};

export default function Hero() {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial={"initial"}
                    animate={"animate"}>
                    <motion.h2>Ishwar Sathe</motion.h2>
                    <motion.h1>Web & Mobile app developer</motion.h1>
                    <motion.div className="buttons">
                        <motion.button>See the latest work</motion.button>
                        <motion.button>Contact Me</motion.button>
                    </motion.div>
                    <motion.div className="slidingTextContainer"
                        variants={sliderVariants}
                        initial="initial"
                        animate="animate">
                        Writer content creator influencer
                    </motion.div>
                    <motion.img src="/scroll.png"
                        variants={textVariants}
                        animate="scrollButton"
                        alt=""
                        className="src" />
                </motion.div>
            </div>
            <div className="imageContainer">
                <img src="/hero.png" alt="hero" />
            </div>
        </div>
    )
}
