import "./projects.scss"
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items =[
    {
        id: 1,
        title: "Todo-App",
        img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "This project consists of PostgreSQL, Express, React, and Node.js technologies to build a Todo full-stack web application!",
      },
      {
        id: 2,
        title: "Book Review Application",
        img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "In this project, I created APIs and performed CRUD operations on an Express server using Session and JWT authentication. I used promises with Axios in Node.js created REST API endpoints and tested them using Postman.",
      },
      {
        id: 3,
        title: "Budget Allocation Application",
        img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc: "React.",
      },
      {
        id: 4,
        title: "Python Applications",
        img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "• Assignment Application / Flask /n • Emotion Detection Application / Python, AI library /n • Online Course Application / Django /n • Car dealership Application / Cloud App, Python",
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
