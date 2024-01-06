import "./projects.scss"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items =[
    {
        id: 1,
        title: "Todo-App",
        img: "todo-app.png",
        desc: ["This project consists of PostgreSQL, Express, React, and Node.js technologies to build a Todo full-stack web application!"],
        git: "https://github.com/Zainab-Almasoodi/Todo-App_full"
      },
      {
        id: 2,
        title: "Book Review Application",
        img: "book.jpg",
        desc: ["In this project, I created APIs and performed CRUD operations on an Express server using Session and JWT authentication. I used promises with Axios in Node.js created REST API endpoints and tested them using Postman."],
        git:"https://github.com/Zainab-Almasoodi/expressBookReviews"
      },
      {
        id: 3,
        title: "Budget Allocation App.",
        img: "budget_allocation.png",
        desc: ["React."],
        git:"https://github.com/Zainab-Almasoodi/IBM_FinalProject_BudgetAllocationApp"
      },
      {
        id: 4,
        title: "Python Applications",
        img: "python-app.png",
        desc: [
          "- Assignment Application / Flask",
          "- Online Course Application / Django",
          "- Car dealership Application / Cloud App",
          "- Emotion Detection Application /AI library",
       ],
        git:"https://github.com/Zainab-Almasoodi?tab=repositories"
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
              <p>{item.desc[0]}<br/>{item.desc[1]} <br/>{item.desc[2]} <br/>{item.desc[3]}</p>
              <a href={item.git}>
      <button>
      See Github!
      </button>
    </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };


const Projects = () => {
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
   <div className="projects" ref={ref}>
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


export default Projects
