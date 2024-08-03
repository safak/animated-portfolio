import React from 'react';
import { motion } from 'framer-motion';
import './Togglebutton.scss';

const Togglebutton = ({ setOpen, open }) => {
  const topVariants = {
    closed: { d: "M 2 2.5 L 20 2.5" },
    open: { d: "M 3 16.5 L 17 2.5 " }
  };

  const middleVariants = {
    closed: { d: "M 2 11.5 L 20 11.5", opacity: 1 },
    open: { opacity: 0 }
  };

  const bottomVariants = {
    closed: { d: "M 2 20.5 L 20 20.5" },
    open: { d: "M 3 2.5 L 17 16.5" }
  };

  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={topVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={middleVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={bottomVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
        />
      </svg>
    </button>
  );
}

export default Togglebutton;
