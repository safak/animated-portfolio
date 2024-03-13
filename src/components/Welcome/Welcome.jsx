import "./welcome.scss"
import Sidebar from "../sidebar/sidebar"
import {motion} from "framer-motion"

const Welcome = () => {
  const SlideVariant = {
    initial : {
      x: 0,
     
    },
    animate : {
      x : "-220%",
      transition : {
        duration : 20, 
        repeatType : "mirror",
        repeat: Infinity
      },
    }
  }
    const textVariant = {
      initial : {
        x: -500,
        opacity : 0
      },
      animate : {
        x : 0,
        opacity : 1,
        transition : {
          duration : 1, 
          staggeredChildren : 0.1
        },
      },
      scrollButton :{
        opacity : 0,
        y : 10,
        transition : {
           duration : 2,
           repeat : Infinity
        }
      }
    }
    return <div className="welcome">
      <Sidebar/>
      <motion.div className="wrapper">
      <motion.div className="textContainer" variants={textVariant} initial="initial" animate="animate">
        <motion.h2>ABHISHEK VARSHNEY</motion.h2>
        <motion.h1>Web Developer</motion.h1>
        <motion.div className="buttons">
          <motion.button>My Resume</motion.button>
        </motion.div>
        <motion.img variants={textVariant} animate="scrollButton" src="./scroll.png"/>
      </motion.div>
      </motion.div>
      <motion.div className="slidingText" variants={SlideVariant} initial="initial" animate="animate">
        Welcome To my Portfolio
      </motion.div>
      <div className="imageContainer">
      <img src="./profile_photo.jpg"></img>
      </div>
    </div>
}

export default Welcome;