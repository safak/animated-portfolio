import React from 'react'
import "./portfolio.scss"
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform , } from 'framer-motion';



const items = [
    {
        id:1,
        title: "react compfy store",
        img:"https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis id inventore quas expedita labore perspiciatis consequatur recusandae maiores sit officiis!"
    },
    {
        id:2,
        title: "Next js NFt",
        img:"https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis id inventore quas expedita labore perspiciatis consequatur recusandae maiores sit officiis!"
    },
    {
        id:3,
        title: "React Doctor",
        img:"https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis id inventore quas expedita labore perspiciatis consequatur recusandae maiores sit officiis!"
    },
    {
        id:4,
        title: "Javascript",
        img:"https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGVzfGVufDB8fDB8fHww",
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis id inventore quas expedita labore perspiciatis consequatur recusandae maiores sit officiis!"
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


// import { useRef } from "react";
// import "./portfolio.scss";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";


// const Single = ({ item }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section >
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer" ref={ref}>
//             <img src={item.img} alt="" />
//           </div>
//           <motion.div className="textContainer" style={{y}}>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <button>See Demo</button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Portfolio = () => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["end end", "start start"],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={ref}>
//       <div className="progress">
//         <h1>Featured Works</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map((item) => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;