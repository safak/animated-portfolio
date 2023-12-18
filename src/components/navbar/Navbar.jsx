import React from 'react'
import './navbar.scss'
import { motion } from 'framer-motion'
import { FaDiscord } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoGithub } from 'react-icons/io'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      {/* Sidebar */}
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Solution for your Crypto Journey
        </motion.span>
        <div className='social'>
          <a href='#'>
            <FaDiscord size={25} />
          </a>
          <a href='#'>
            <FaLinkedin size={25} />
          </a>
          <a href='#'>
            <FaXTwitter size={25} />
          </a>
          <a href='#'>
            <IoLogoGithub size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
