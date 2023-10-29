import "./Services.scss"
import { motion, useInView } from "framer-motion";
import { useRef, useState} from "react";
import Modal from "./Modal";





const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef();
    const isInView = useInView(ref,{margin: "-100px"});

    return (
        <motion.div className="services" 
                    variants={variants} 
                    //initial="initial" 
                    animate={isInView && "animate"}
                    ref={ref}
                    >
            <motion.div className="textContainer">
                <p>About my story</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Best</motion.b> Candidate
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Building</motion.b> Success with.
                    </h1>
                    <button>What I do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Education</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Experience</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Certificates</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Honors</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button onClick={() => setIsModalOpen(true)} initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        // trailName={selectedTrailName}
                    />

                </motion.div>
            </motion.div>
        </motion.div>
    )



}

export default Services;