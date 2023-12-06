import './hero.scss'
import {motion} from "framer-motion"

const textVariants ={
  initials:{
    x:-500,
    opacity: 0,
  },

  animate:{
    x:0,
    opacity: 1,
    transition:{
      duration: 1,
      staggerChildren:0.1
    }
  },

  scrollButton:{
    opacity:0,
    y:0,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVariants ={
  initials:{
    x:0,
  },

  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
      
    }
  },

  // scrollButton:{
  //   opacity:0,
  //   y:0,
  //   transition:{
  //     duration:2,
  //     repeat:Infinity
  //   }
  // }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants}
        initial="initials" animate="animate"
      >
            <motion.h2 variants={textVariants}>ART WORLD</motion.h2> 
            <motion.h1 variants={textVariants}>Experience the art love around</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}>See the Latest release</motion.button>
                <motion.button variants={textVariants}>Contact me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer"
        variants={sliderVariants} initial="initials" animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img  src="/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
