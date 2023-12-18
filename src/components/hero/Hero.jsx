import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

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
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 30,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          // animate='animate'
          whileInView={'animate'}
        >
          <motion.h2
            variants={textVariants}
            
          >
            CRYPTO MYHEM
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Empowering Your Crypto Journey with AI Insights
          </motion.h1>
          <div className='buttons'>
            <motion.button variants={textVariants}>Our Feats</motion.button>
            <motion.button variants={textVariants} className='button_2'>
              Contact Us
            </motion.button>
          </div>
          <motion.img
            variants={textVariants}
            src='../../../public/scroll.png'
            alt='scroll'
            animate='scrollButton'
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        animate='animate'
        variants={sliderVariants}
        initial='initial'
      >
        Earn Exchange Trade Invest
      </motion.div>
      <div className='imageContainer'>
        <img
          src='../../../public/cryptocurrency-exchange-3d-illustration-free-png.webp'
          alt='safe'
        />
      </div>
    </div>
  )
}

export default Hero
