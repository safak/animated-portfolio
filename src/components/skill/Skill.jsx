import React from 'react';
import './Skill.scss';
import Bubble from './Bubble';
import { motion } from 'framer-motion';


const getRandomDuration = () => 20 + Math.random() * 5; 


const Skill = () => {
    const bubbles = [
        { size: '250px', duration: getRandomDuration(), bg:'/javascript.png' },
        { size: '300px', duration: getRandomDuration(), bg:'/react.png' },
        { size: '375px', duration: getRandomDuration(), bg:'/node.png' },
        { size: '400px', duration: getRandomDuration(), bg:'/html.png' },
        { size: '300px', duration: getRandomDuration(), bg:'/r.png' },
        { size: '275px', duration: getRandomDuration(), bg:'/tableau.png' },
        { size: '350px', duration: getRandomDuration(), bg:'/tensorflow.png' },
        { size: '500px', duration: getRandomDuration(), bg:'/docker.png' },
        { size: '350px', duration: getRandomDuration(), bg:'/python.png' },
        // Add more bubbles as needed
      ];
    
    const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
        }
    }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1
        }
    };

    const arrow = {
        hidden: {
          y: -100, // Initial position above the view
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          y: 10, // End position below the view
          opacity: 1,
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop", // Makes the animation go back and forth
            repeatDelay: 0.5, // Delay before repeating the animation
          },
        },
      };
      

  return (
    <div className="skill">
      <motion.div className="skill-title" variants={container}
            initial="hidden"
            animate="visible">
        What I can do?
      </motion.div>
      <motion.div className="skill-container"
            variants={container}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1}}>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/react.png" alt=""/> */}
        <p>Data Cleaning</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/node.png" alt=""/> */}
        <p>Data Exploration</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/html.png" alt=""/> */}
        <p>Data Preprocessing</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/css.png" alt=""/> */}
        <p>Data Analysis</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/javascript.png" alt=""/> */}
        <p>Data Visualisation</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/python.png" alt=""/> */}
        <p>Machine Learning</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/sql.png" alt=""/> */}
        <p>Tableau</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/tableau.png" alt=""/> */}
        <p>Data Engineer</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/docker.png" alt=""/> */}
        <p>Data Warehouse</p>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.5, rotate: 360 }}>
        {/* <img src="/postgregis.png" alt=""/> */}
        <p>Front End</p>
        </motion.div>
      </motion.div>
      <motion.a href="#Contact" variants={arrow} initial="hidden"
      animate="visible" className="scroll-arrow">↓</motion.a>
      {bubbles.map((bubble, index) => (
        <Bubble 
          key={index} 
          size={bubble.size} 
          duration={bubble.duration} 
          bg={bubble.bg} 
        />
      ))}


      
    </div>
  );
};

export default Skill;
