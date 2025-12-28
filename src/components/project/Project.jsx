import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Single Card
const Single = ({ item }) => {
  const ref = useRef();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 200]), {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="project">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <button onClick={() => navigate(`/projects/${item.slug}`)}>
              Case Study
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio List
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

  const items = [
    {
      id: 1,
      slug: "issac-lord-ecommerce",
      title: "Isaac Lord E-commerce",
      img: "/projectImg/issac.png",
      desc: "A dynamic UK-based e-commerce platform built with a CMS-driven catalog, optimized product browsing, and advanced filtering for industrial tools.",
    },
    {
      id: 2,
      slug: "turkmen-gala-corporate-site",
      title: "Turkmen Gala Corporate Website",
      img: "/projectImg/turkmangala.png",
      desc: "Corporate website for a leading energy solutions provider featuring bilingual content, content-managed pages, and smooth animated interactions.",
    },
    {
      id: 3,
      slug: "buyamia-marketplace",
      title: "Buyamia Marketplace",
      img: "/projectImg/buyamia.png",
      desc: "A scalable multi-vendor marketplace enabling sellers to onboard products, customers to shop seamlessly, and admins to control operations.",
    },
  ];

  return (
    <div className="portfolio" ref={ref} id="projects">
      <div className="progress">
        <h1 style={{ marginTop: "30px" }}>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
