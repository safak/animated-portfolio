import { useRef, useState } from "react";
import "./portfolio.scss";
import Parallax from "../parallax/Parallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Secure Cyclist",
    images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
  {
    id: 2,
    title: "Interactive Map Visualisation of Taiwan's Travel Destinations",
    images: ["/tw_landing.png","/tw_filter.png", "/tw_cluster.png", "/tw_popup.png", "/tw_list.png", "/tw_list_pg.png"],
    desc: "This project showcases a R Shiny application that fuses four open datasets from Taiwan Travel Bureau into an interactive map visualisation. Designed with the Leaflet library, the application offers users a dynamic interface for exploring Taiwan’s scenic spots, events, restaurent and accommodations. Its features include intuitive filtering options, clickable map that reveal detailed information, and a responsive list view. The visual tool not only enhances the user experience but also serves as an innovative resource for planning travels in Taiwan.",
  },
  {
    id: 3,
    title: "Another Aspect of Stack Overflow Annual Survey 2022",
    images: ["/stk_landing.png", "/stk_line.png","/stk_heatmap.png","/stackover.jpeg",],
    desc: "The project delves into the demographics, earnings, and learning pathways of contributors to Stack Overflow. By examining the survey data, this project provides fresh insights into the global community of developers that use the platform, offering a unique perspective on the trends and traits that define the coding landscape. This analysis aims to enhance user experience and inform educational strategies within the coding community.",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    images: ["/person.png", "/person.png","/person.png","/person.png",],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const [currentImage, setCurrentImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
  });
  // console.log("Scroll Y Progress:", scrollYProgress.get());
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section id="Projects">
      <div className="container">
        <div className="wrapper">
          
          <motion.div className="textContainer" ref={ref}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>

          <motion.div className="imageContainer" style={{y}}>  
            {/* <img src={item.img} alt="" /> */}
            <img src={item.images[currentImage]} alt="" />
            <div className="dots">
              {item.images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                ></span>
              ))}
            </div>
            <button onClick={prevImage} className="navButton prevButton">&#171;</button>
            <button onClick={nextImage} className="navButton nextButton">&#187;</button>
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
      <div><Parallax type="services" /></div>
      
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