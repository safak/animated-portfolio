import React from 'react';
import './Skill.scss';
import Bubble from './Bubble';
import { motion } from 'framer-motion';


const getRandomDuration = () => 20 + Math.random() * 5; 


const Skill = () => {
    const bubbles = [
        { size: '50px', duration: getRandomDuration() },
        { size: '100px', duration: getRandomDuration() },
        { size: '75px', duration: getRandomDuration() },
        { size: '50px', duration: getRandomDuration() },
        { size: '100px', duration: getRandomDuration() },
        { size: '75px', duration: getRandomDuration() },
        { size: '50px', duration: getRandomDuration() },
        { size: '100px', duration: getRandomDuration() },
        { size: '50px', duration: getRandomDuration() },
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
      

    // const scrollToProjects = () => {
    //     scroller.scrollTo('projects', {
    //       duration: 800,
    //       delay: 0,
    //       smooth: 'easeInOutQuart'
    //     });
    //   }

  return (
    <div className="skill">
      <motion.div className="skill-title" variants={container}
            initial="hidden"
            animate="visible">
        What I do?
      </motion.div>
      <motion.div className="skill-container"
            variants={container}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1}}>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/react.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/node.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/html.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/css.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/javascript.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/python.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/sql.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/tableau.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/docker.png" alt=""/>
        </motion.div>
        <motion.div className="sk" variants={item} whileHover={{ scale: 1.1, rotate: 360 }}>
        <img src="/postgregis.png" alt=""/>
        </motion.div>
      </motion.div>
      <motion.a href="#Projects" variants={arrow} initial="hidden"
      animate="visible" className="scroll-arrow">what I did ↓</motion.a>
      {bubbles.map((bubble, index) => (
        <Bubble 
          key={index} 
          size={bubble.size} 
          duration={bubble.duration} 
          direction={bubble.direction} 
        />
      ))}


      
    </div>
  );
};

export default Skill;
