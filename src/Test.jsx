import {motion} from "framer-motion";
import { useState } from "react";

const Test = () => {

  // example transition : type: "spring", stiffness:100, damping:100
  // example transition : staggerChildren: 0.2

  const [open,setOpen] = useState(false);

  const variants = {
    visible: (i) => ( {
      opacity: 1, 
      x:100, 
      transition:{ delay:i * 0.3}
    } ),
    hidden: {opacity: 0},
  }

  const items = [
    "item1",
    "item2",
    "item3",
    "item4",
  ]   
  return (
    <div className="course">

      {/* ------default------- */}
        {/* <motion.div className="box" 
        initial={{opacity:0.5, scale: 0.5}}
        // animate={{opacity:1, scale: 1}}
        transition={{duration:2}}
        whileInView={{opacity:1, scale:2}}
        drag
        >
        </motion.div> */}
        
        
        {/* -----using Variants------ */}
        {/* <motion.div 
        className="box" 
        variants={variants}
        // initial="hidden"
        // animate="visible"
        transition={{duration: 2}}
        >
        </motion.div> */}
       
        {/* -----using useState + variants------ */}
        {/* <motion.div 
        className="box" 
        variants={variants}
        animate={open ? "visible" : "hidden"}
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>click</button> */}

        {/* frame motion using item list */}
        <motion.ul initial="hidden" animate="visible" variants={variants}>
          {items.map((item, i) => (
          <motion.li variants={variants} custom={i}
          key={item}>
            {item}
          </motion.li>
          ))}
        </motion.ul>

    </div>
  )
}

export default Test