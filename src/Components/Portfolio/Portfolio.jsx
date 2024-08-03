import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './Portfolio.scss';

const items = [
    { id: 1, title: "E-Commerce", img: "/people.webp", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum reiciendis laboriosam quisquam molestias, error eius delectus consectetur numquam beatae consequatur, recusandae maiores libero rem excepturi, inventore perspiciatis veniam dolor similique?." },
    { id: 2, title: "Food Delivery App", img: "/pro.png", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: 3, title: "Portfolio", img: "/pro.png", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: 4, title: "University", img: "/pro.png", desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
];

const Single = ({ item }) => {
    const ref = useRef(null);
   

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0,-0]);

    return (
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContainer" >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See website</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


const Portfolio = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>My Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
