import "./portifolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "/Pombocorp.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsa necessitatibus nulla minima sapiente cupiditate voluptatem saepe eius nemo quam! Delectus voluptatem, totam reprehenderit vel atque ipsa architecto commodi enim.",
    },
    {
        id: 2,
        title: "React Commerce",
        img: "/public/PomboCorp.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsa necessitatibus nulla minima sapiente cupiditate voluptatem saepe eius nemo quam! Delectus voluptatem, totam reprehenderit vel atque ipsa architecto commodi enim.",
    },
    {
        id: 3,
        title: "React Commerce",
        img: "/Pombocorp.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsa necessitatibus nulla minima sapiente cupiditate voluptatem saepe eius nemo quam! Delectus voluptatem, totam reprehenderit vel atque ipsa architecto commodi enim.",
    },
    {
        id: 4,
        title: "React Commerce",
        img: "/Pombocorp.jpg",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure ipsa necessitatibus nulla minima sapiente cupiditate voluptatem saepe eius nemo quam! Delectus voluptatem, totam reprehenderit vel atque ipsa architecto commodi enim.",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        //* offset: ["end end", "start start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Veja mais</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portifolio = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 10,
    });

    return (
        <div className="portifolio" ref={ref}>
            <div className="progress">
                <h1>Projetos em Destaque</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portifolio;