import { useRef } from "react";
import "./portfolio.scss";





import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Test Drive",
    img: 'src/assets/Screenshot 2023-10-15 at 6.05.00 PM.png',
    desc: "The goal of this project was to pretend A client has requested that we add a page to their website for scheduling a test drive. This was built over 3 days for a frontend engineering interview using React.js",
    demoUrl: 'https://beautiful-frangollo-547a96.netlify.app/',

  },
  {
    id: 2,
    title: "The Door",
    img: 'src/assets/Screenshot 2023-10-15 at 6.11.46 PM.png',
    desc: "The goal of this project was to faithfully recreate a UX teams designs in a fully-functioning format. The Get Involved dropdown allows the user to select Volunteer, which will lead them to a page where they fill out a form to volunteer. Upon creating a submission, the user will have a chance to read their information and confirm, edit, or delete their volunteer registration.",
    demoUrl: 'https://the-door-nyc.netlify.app/',

  
  },
  {
    id: 3,
    title: "Fork Over Spoon",
    img: 'src/assets/Screenshot 2023-10-15 at 6.07.49 PM.png',
    desc: "Fork over spoon is a food app that lets you search recipes by food names. After you find a recipe you like you can click a link and be redirected to a detailed recipe. This app pulls data from the Edamam API.",
    demoUrl: 'https://pages.git.generalassemb.ly/Rico/Forkoverspoon/',

  },
  {
    id: 4,
    title: "Everycent",
    img: 'src/assets/Screenshot 2023-10-15 at 6.10.20 PM.png',
    desc: "Everycent is a personal expense tracker. Everycent allow users to track their expenses and to analyze them. The core functionality here is adding records of the cash flow. Expenses will be divided by categories and the users will be able to create and delete expenses.",
    demoUrl: 'https://frosty-borg-1a49b1.netlify.app/',

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
            <a href={item.demoUrl} target="_blank" rel="noopener noreferrer">
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
