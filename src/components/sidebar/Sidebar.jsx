
import "./sidebar.scss"
import ToggleButton from './toggleButton/ToggleButton'
import Links from './links/Links'
import { delay, motion } from 'framer-motion'
import { useState } from 'react'



const variants = {
  open: {
    clipPath:"circle(1200 at 50px 50px)",
    transition:{
      type:"spring",
      stiffness:20,
    }
  }, 
  closed: {
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:400,
    }

  }
 }


const Sidebar = () => {

  const [open , setOpen] = useState(false)

 
  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed" }>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar