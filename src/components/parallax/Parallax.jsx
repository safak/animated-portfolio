import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import ai from '../../../public/about/ai.png';
import code from '../../../public/about/code.png';
import ui from '../../../public/about/ui.png';
import paw from '../../../public/about/paw.png';
import cloud from '../../../public/about/cloud.png';
import crafts from '../../../public/about/crafts.png';
import badminton from '../../../public/about/badminton.png';

const Parallax = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div className="parallax" style={{ background: "linear-gradient(180deg, #111132, #0c0c1d)" }}>
            <motion.div className="about-me">
                <h1 className="title">About Me</h1>
                <motion.div className="sections">
                    <motion.div className="section tech">
                        <h2>What Excites Me in Tech</h2>
                        <div className="content">
                            <div className="item">
                                <img src={ai} alt="AI" />
                                <p>Artificial Intelligence and its potential to revolutionize industries.</p>
                            </div>
                            <div className="item">
                                <img src={cloud} alt="Cloud Computing" />
                                <p>Cloud Computing and building scalable solutions.</p>
                            </div>
                            <div className="item">
                                <img src={ui} alt="UI/UX" />
                                <p>UI/UX Design and creating intuitive user interfaces.</p>
                            </div>
                            <div className="item">
                                <img src={code} alt="Software Engineering" />
                                <p>Software Engineering and developing efficient algorithms.</p>
                            </div>
                        </div>
                    </motion.div>
                    <div className="timeline"></div>
                    <motion.div className="section interests">
                        <h2>Personal Interests</h2>
                        <div className="content">
                            <div className="item">
                                <img src={paw} alt="Puppies" />
                                <p>Spending time with puppies and babies.</p>
                            </div>
                            <div className="item">
                                <img src={badminton} alt="Badminton" />
                                <p>Playing badminton.</p>
                            </div>
                            <div className="item">
                                <img src={crafts} alt="Crafting" />
                                <p>Crafting</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{ y: yBg, backgroundImage: "url('/images/planets.png')" }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;
