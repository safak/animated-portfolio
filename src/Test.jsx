import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    visible: {
      opacity: 1,
      x: 100,

      transition: { staggerChildren: 2 },
      /* transition: { type: "spring", stiffness: 100 }, */
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      {/*<motion.div
        initial={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1, scale: 1 }} 
        drag

        note when the animation type is set to spring theduration object cannot be set instead you can use stiffness the less the value of the stiffness the slower the animation will be and its values increases in 100

        ALSO WE CAN DO THEM LIKE THIS*/
      /* variants={variants}
        transition={{ duration: 2 }}
        animate={open ? "visible" : "hidden"}
        className="box"
  /> */}
      {/* <button
        className="button"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        sub
      </button> */}
      {/* This way the button is used to control the animation state  */}

      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
