import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}
export default function Links() {

  const sidebarItems = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ];

  return (
    <motion.div className='links' variants={variants}>
      {
        sidebarItems.map((item) => {
          return <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >{item}</motion.a>
        })
      }
    </motion.div>
  )
}
