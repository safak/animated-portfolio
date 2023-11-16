import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({type}) => {

    const ref = useRef();
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            // offset: ["start center", "end center"]
        }
    );

    const yText= useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yBg= useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const xMotion = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <motion.div className="parallax"
             ref={ref}
        >
            {/* <motion.h1 style={{ y:yText}}>
                {type === "services" ? "My Journey" : "What I Did?"}
            </motion.h1> */}
            <motion.div className="rocket"></motion.div>
            <motion.div
                className="planets"
                style={{
                y: yBg,
                x: xMotion,
                // backgroundImage: `url(${
                //     type === "services" ? "/bg_3d.png" : "/shooting_3d.png"
                // })`,
                }}
            ></motion.div>
            <motion.div style={{ y:yBg}} className="stars"></motion.div>

        
        </motion.div>
    )
}

export default Parallax;