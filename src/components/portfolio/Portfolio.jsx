import { useRef } from "react";
import "./portfolio.scss";
import Parallax from "../parallax/Parallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Secure Cyclist",
    img: "/cyclist.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Taiwan Travel Map",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 3,
    title: "Stack Overflow Annual Report Analysis",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    img: "/person.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  // console.log("Scroll Y Progress:", scrollYProgress.get());
  const y = useTransform(scrollYProgress, [0, 1], [-500, 100]);

  return (
    <section id="Projects">
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" whileHover={{ scale: 1.1}} ref={ref}>
            <img src={item.img} alt="" />
          </motion.div>
          <motion.div className="textContainer" whileHover={{ scale: 1.1}} style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 10,
    damping: 30,
  });
  // const scaleX = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // console.log("port Scroll Y Progress:", scrollYProgress.get());

  return (
    <div className="portfolio" ref={ref}>
      <Parallax type="services" />
        <div className="content">
          <div className="progress">
            <h1>Projects</h1>
            <motion.div style={{ scaleX, originX: "0%" }} className="progressBar"></motion.div>
          </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;