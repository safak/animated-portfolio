import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll ({
        target:ref,
        offset:["start start", "end start"]
    });

    
    const yText = useTransform(scrollYProgress, [1, 0], ["100%", "0%"]);
    const opacityText = useTransform(scrollYProgress, [1, 0], [1, 0]); // Mantém alguma visibilidade antes de sumir
    const ySun = useTransform(scrollYProgress, [0, 1], ["20%", "5%"]);
    const yMoon = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const xStars = useTransform(scrollYProgress, [0,1], ["0%", "50%"]);
    const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yMountainsBackground = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const yMountains03 = useTransform(scrollYProgress, [0, 1], ["0%", "65%"]);
    const yMountains02 = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
    const yMountains01 = useTransform(scrollYProgress, [0, 1], ["0%", "55%"]);
    const yTrees = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);    
    
    return (
        <div 
            className="parallax" 
            ref={ref} 
            style={{
                background: type === "Services" 
                    ? "linear-gradient(180deg, #FAD961, #111132)"
                    : "linear-gradient(180deg, #111132, #0c0c1d)" 
            }}
        >
            <motion.h1 style={{ y: yText, opacity: opacityText }}>
                {type === "Services" ? "O que fazemos?" : "O que fizemos?"}
            </motion.h1>

            {/* Elementos animados com delay */}
            <motion.div 
                className="moon" 
                style={{ 
                    backgroundImage: `url(${type === "Services" ? "/Sun.png" : "/Moon.png"})`,
                    y: type === "portifolio" ? ySun : yMoon, yText
                }}
            ></motion.div>
            <motion.div style={{ y: yStars, x: xStars }} className="stars"></motion.div>
            <motion.div style={{ y: yMountainsBackground }} className="montanhas-fundo"></motion.div>
            <motion.div style={{ y: yMountains03 }} className="montanha03"></motion.div>
            <motion.div style={{ y: yMountains02 }} className="montanha02"></motion.div>
            <motion.div style={{ y: yMountains01 }} className="montanha01"></motion.div>
            <motion.div style={{ y: yTrees }} className="arvores"></motion.div>
        </div>
    );
};

export default Parallax;