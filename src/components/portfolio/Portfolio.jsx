import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "placeholder 1",
    img: "https://images.pexels.com/photos/2371016/pexels-photo-2371016.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui debitis maxime alias autem mollitia atque rem quibusdam, sunt sapiente aut iure laborum doloremque ea voluptatibus? Praesentium, voluptates nihil! Unde!",
  },
  {
    id: 2,
    title: "placeholder 2",
    img: "https://images.pexels.com/photos/1660603/pexels-photo-1660603.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui debitis maxime alias autem mollitia atque rem quibusdam, sunt sapiente aut iure laborum doloremque ea voluptatibus? Praesentium, voluptates nihil! Unde!",
  },
  {
    id: 3,
    title: "placeholder 3",
    img: "https://images.pexels.com/photos/2921139/pexels-photo-2921139.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui debitis maxime alias autem mollitia atque rem quibusdam, sunt sapiente aut iure laborum doloremque ea voluptatibus? Praesentium, voluptates nihil! Unde!",
  },
  {
    id: 4,
    title: "placeholder 4",
    img: "https://images.pexels.com/photos/1473673/pexels-photo-1473673.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui debitis maxime alias autem mollitia atque rem quibusdam, sunt sapiente aut iure laborum doloremque ea voluptatibus? Praesentium, voluptates nihil! Unde!",
  },
];

const Single = ({ item }) => {
  return <section>{item.title}</section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
