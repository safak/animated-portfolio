import React from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ size, duration, bg }) => {
    const horizontalVariance = 800 + Math.random() * 100 - 100;
    const Variants = {
        initial: {
          y: '100vh',
          x: 0,
        },
        animate: {
          y: '-100vh',
          x: horizontalVariance,
          transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
          },
        },
      };

  return (
    <motion.div
      className="bubble"
      variants={Variants}
      initial="initial"
      animate="animate"
      style={{ width: size, height: size,
        position: 'relative',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center' 
       }}
    >
     <img 
        src={bg} 
        alt="" 
        style={{ 
          position: 'absolute',
          width: '30%',
          paddingLeft: '40px', 
          height: '180%',
          zIndex: 1
        }} 
      />
      <img 
        src={"/bubble.png"} 
        alt="" 
        style={{ 
          width: '50%', 
          height: '800%',
          position: 'absolute',
          // top: 0,
          // left: 0,
          //opacity: 0.9, // Adjust the opacity for a "see-through" effect
          zIndex: 2 // This ensures the bubble image is on top
        }} 
      />
    </motion.div>
  );
};

export default Bubble;
