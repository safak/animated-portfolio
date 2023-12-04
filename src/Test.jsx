import React from 'react';
import { motion } from 'framer-motion';

export default function Test() {
  return (
    <div className='course'>
      <motion.div 
        className="box" 
        initial={{opacity: 0.5, scale: 0.5}}
        transition={{duration: 2}}
        whileHover={{opacity: 1, scale: 2}}
        drag>

      </motion.div>
    </div>
  )
}
