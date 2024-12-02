import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Krishak Vriddhi",
    img: "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "I Developed an innovative agricultural platform using flask and machine learning to enhance farming efficiency and reducing food waste Delivering a crop and fertilizer prediction system based on soil data, a fertilizer scheduling system, and a Weather API for weather forecast",
    link: "https://github.com/charmee123/KrishakVriddhi-final.git",
  },
  {
    id: 2,
    title: "Blog Application",
    img: "https://images.pexels.com/photos/28176919/pexels-photo-28176919/free-photo-of-office-equipment-blank-screen-mockup-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "I Created a scalable and user-friendly  platform using MERN stack technology that allows users to create, edit, and publish blog posts, driving higher engagement through commenting feature. ",
    link: "https://github.com/charmee123/blog-app-mern-stack.git",
  },
  {
    id: 3,
    title: "Rhythmic",
    img: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Rhythmic let user play musical instruments like guitar, drums, piano and panflute virtually.",
    link: "https://github.com/charmee123/Rhythmic.git",
  },
  {
    id: 4,
    title: "Music Player",
    img: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "This is the begginer friendly music player which was created using html, css and javascript",
    link: "https://github.com/charmee123/Music_player.git",
  },
  {
    id: 5,
    title: "TextUtils",
    img: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "With user-friendly interface, you can easily copy and clear any text with just a few clicks. But that's not all - our powerful tools also allow you to convert text to uppercase or lowercase, giving you total control over your content. Whether you're writing a report, composing an email, or just need to tweak some text, TextUtils has you covered",
    link: "https://github.com/charmee123/TextUtils.git",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
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
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
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
