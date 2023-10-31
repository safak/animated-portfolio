import './hero.scss';
import { motion } from 'framer-motion';

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
  scrollAnimation: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Steve Crabtree</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className='btn'>
            <motion.button variants={textVariants}>
              Latest Projects
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollAnimation'
            src='/scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <div className='slidingTextContainer'>
        Web Developer and Loving Husband
      </div>
      <div className='imageContainer'>
        <img src='/hero.png' alt='' />
      </div>
    </div>
  );
};

export default Hero;
