import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Job Tracker",
    img: "/jobtrack.png",
    desc: "An app to let users know the status of their applied jobs.Create/delete and edit job applications.",
  },
  {
    id: 2,
    title: "Storybook Analyser",
    img: "/Story book analysis.png",
    desc: "A web app which lets users to add pictures from storybooks and the llm model creates a story connecting all the pictures",
  },
  {
    id: 3,
    title: "CO-PO Attainment App",
    img: "/Co-po attain.png",
    desc: "A Web app designed for teachers to find the quality of their education and analyse the results",
  },
  {
    id: 4,
    title: "Flyweight Polls",
    img: "/homepage.png",
    desc: "A polling app that lets users create,vote and filter polls by tags",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
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
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="prog">
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