import { useRef, useState } from "react";
import "./portfolio.scss";
import Parallax from "../parallax/Parallax";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Secure Cyclist",
    images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
    desc: "jijpjpjipjpijipjpijp",
  },
  {
    id: 2,
    title: "Data Warehouse",
    images: ["/tw_landing.png","/tw_filter.png", "/tw_cluster.png", "/tw_popup.png", "/tw_list.png", "/tw_list_pg.png"],
    desc: "",
  },
  {
    id: 3,
    title: "Data Analysis & Vis",
    images: ["/stk_landing.png", "/stk_line.png","/stk_heatmap.png","/stackover.jpeg",],
    desc: "",
  },
  {
    id: 4,
    title: "Machine Learning",
    images: ["/person.png", "/person.png","/person.png","/person.png",],
    desc: "",
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
            <h1>What I did</h1>
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