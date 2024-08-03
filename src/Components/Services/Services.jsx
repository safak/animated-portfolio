import { useRef } from 'react';
import'../Services/Services.scss'
import {motion,useInView}from "framer-motion"

const variants ={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },

    },
};

const Services = () => {
    const ref = useRef()


    const isInView = useInView(ref,{margin:"-100px"})
  return (
    <motion.div className='services' variants={variants} initial="initial"  whileInView="animate" ref={ref} animate={isInView &&"animate"}>
        <motion.div className="textContainer"variants={variants}>
        <p>
                     
        Building Beautiful Web Experiences 
        <br />  Crafting Pixels into Perfection
        </p>
        <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>Where Creativity </motion.b>Meet's Code
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>Innovative Design </motion.b>Flawless Execution
            </h1>
            <button>See More</button>
        </div>
        </motion.div>
        <motion.div className="listContainer"variants={variants}>
<motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
    <h2>Responsive Web Design</h2>
    <p>Showcase your ability to create websites that look great on any device, from desktops to smartphones
    Include examples of projects where you implemented responsive design principlesmotion.
    </p>
    <button>Go</button>
</motion.div>
<motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
    <h2>Single Page Applications (SPAs)</h2>
    <p>Demonstrate your expertise in building SPAs using frameworks like React,
    Provide examples of SPAs you’ve developed, detailing the features and benefits of each.
    </p>
    <button>Go</button>
</motion.div>
<motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
    <h2>Performance Optimization</h2>
    <p>Emphasize your commitment to building websites that are accessible to all users, including those with disabilities,
    Detail your process for ensuring compliance with accessibility standards.
    </p>
    <button>Go</button>
</motion.div>
<motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
    <h2>Custom Component Development</h2>
    <p>Showcase your ability to create reusable, custom components in libraries like React,
    Highlight specific components you’ve developed and how they enhance the functionality of a project.
    </p>
    <button>Go</button>
</motion.div>

        </motion.div>
    </motion.div>
  )
}

export default Services