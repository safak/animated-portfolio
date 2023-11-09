import { useRef } from "react";
import "./myskills.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Myskills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      // animate="animate"
      //whileInView="animate"
      ref={ref}
      animate={isInView &&"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Make it work, make it right, make it fast.
          <br /> - Kent Beck
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./pngegg7.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Skills</motion.b> I have
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>Tools</motion.b> I use.
          </h1>
          <img src="./pngegg4.png" alt="" />
        </div>
      </motion.div>
      <motion.div className="listContainer1" variants={variants}>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./javascript.png"/>
          {/*<h2>JavaScript</h2>*/}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./react.png"/>
          
        </motion.div>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./node.png"/>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./express.png"/>
          {/*<h2>JavaScript</h2>*/}
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./rudx.png"/>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./html.png"/>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./css.png"/>
          
        </motion.div>
      </motion.div>

      

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./python.png"/>
          {/*<h2>JavaScript</h2>*/}
        </motion.div>
        
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./flask.png"/>
          
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./django.png"/>
          
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./sql.png"/>
          
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./postgre.png"/>
          
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./github.png"/>
          
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <img src="./ai.png"/>
          
        </motion.div>
      </motion.div>
      </motion.div>
    </motion.div>
    
  );
};

export default Myskills;