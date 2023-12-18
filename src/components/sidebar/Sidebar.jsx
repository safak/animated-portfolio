import React, { useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'

const variants = {
  open: {
    clipPath: 'circle(2200px at calc(100vw - 50px) 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at calc(100vw - 50px) 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const closeSidebar = (isOpen) => {
    setOpen(isOpen)
  }

  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links closeSidebar={closeSidebar} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
