import { useRef } from 'react';
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants ={
  initial:{
    x:-500,
    y:100,
    opacity:0.
  },

  animate:{
    x:0,
    opacity:1,
    y:0,

    transition:{
      duration:1,
      staggerChildren:0.1
    }
  }
}

const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref,{margin:"-100px"} )



  return (
    <motion.div className="services"
      variants={variants} 
      initial="initial" 
      // whileInView="animate"
      ref={ref}
      animate={  "animate" } 
    >
        <motion.div className="textContainer" variants={variants}>
          <p>focus on helping your brand grow <br/>
            and move forward
          </p>
        </motion.div>
        <motion.div className="titleContainer"
          variants={variants} 
          initial="initial" 
          // whileInView="animate"
          ref={ref}
          animate={isInView && "animate" } 
        >
            <div className="title">
              <img src="/people.webp" alt="" />
              <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
              </h1>
            </div>
            <div className="title">
              <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
              </h1>
              <button>WHAT WE DO</button>
            </div>
        </motion.div>
        <motion.div className="listContainer"
          variants={variants} 
          initial="initial" 
          // whileInView="animate"
          ref={ref}
          animate={isInView && "animate" } 
        >
          <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black" }}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis labore esse fugit quisquam expedita perferendis excepturi iure dignissimos magnam! Laborum minima, quam dignissimos asperiores quas repellendus harum neque obcaecati?</p>
            <button>GO</button>
          </motion.div>

          <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black" }}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis labore esse fugit quisquam expedita perferendis excepturi iure dignissimos magnam! Laborum minima, quam dignissimos asperiores quas repellendus harum neque obcaecati?</p>
            <button>GO</button>
          </motion.div>

          <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black" }}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis labore esse fugit quisquam expedita perferendis excepturi iure dignissimos magnam! Laborum minima, quam dignissimos asperiores quas repellendus harum neque obcaecati?</p>
            <button>GO</button>
          </motion.div>

          <motion.div className="box" whileHover={{backgroundColor:"lightgray", color:"black" }}>
            <h2>Branding</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officiis labore esse fugit quisquam expedita perferendis excepturi iure dignissimos magnam! Laborum minima, quam dignissimos asperiores quas repellendus harum neque obcaecati?</p>
            <button>GO</button>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services
