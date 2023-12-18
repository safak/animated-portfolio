import React from 'react'
import { motion } from 'framer-motion'

const varients = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const itemVarients = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
}

const Links = ({ closeSidebar }) => {
  const items = ['Homepage', 'About', 'Services', 'Portfolio', 'Contact']

  const handleClick = () => {
    // Close the sidebar when a link is clicked
    closeSidebar(false)
  }

  return (
    <motion.div className='links' variants={varients}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVarients}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
