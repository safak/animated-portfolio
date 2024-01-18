import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,

    title: "React Commerce",
    img: "https://images.pexels.com/photos/19642432/pexels-photo-19642432/free-photo-of-resfriado-nieve-montanas-punto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "lore ipsu kjdkfjlklkljsd tyyuyuiu tu uhy9io899o0 ygun yu878r8ooui9re3fghgyi y887 t7t777g t7yr tyvb56 55",
  },
  {
    id: 2,
    title: "Music App",
    img: "https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=400",
    desc: "lore ipsu kjdkfjlklkljsd tyyuyuiu tu uhy9io899o0 ygun yu878r8ooui9re3fghgyi y887 t7t777g t7yr tyvb56 55",
  },
  {
    id: 3,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/3996362/pexels-photo-3996362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "lore ipsu kjdkfjlklkljsd tyyuyuiu tu uhy9io899o0 ygun yu878r8ooui9re3fghgyi y887 t7t777g t7yr tyvb56 55",
  },
  {
    id: 4,
    title: "vanilla JS App",
    img: "https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "lore ipsu kjdkfjlklkljsd tyyuyuiu tu uhy9io899o0 ygun yu878r8ooui9re3fghgyi y887 t7t777g t7yr tyvb56 55",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio " ref={ref}>
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
