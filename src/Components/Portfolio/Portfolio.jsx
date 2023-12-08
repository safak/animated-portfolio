import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [
  {
    id: 1,
    name: "Modern Landing Page",
    desc: "A Modern and Visually Appealing Landing Page Built Using HTMl, Css and Javascript",
    img: "/page.png",
    link: <a href="https://modern-landing-pagebysaurav.netlify.app" />,
  },

  {
    id: 2,
    name: "Static Amazon Clone",
    desc: "A Simple and Static Amazon Home Page Clonebuild using Only HTML And CSS ",
    img: "/amazon.png",
    link: <a href="https://amazon.sourav2425.repl.co/" />,
  },

  {
    id: 3,
    name: "QR Code Generator",
    desc: "Wanna Generate a QR Code from your Text? Try This QR Generating App, Whatever your write gets converted into a real time QR.",
    img: "/QR.png",
    link: <a href="https://qr-code-generator.sourav2425.repl.co" />,
  },

  {
    id: 4,
    name: "Weather App",
    desc: "Wanna Check out Your City's Weather. Well Heres A Real Time Weather Showing App",
    img: "/weather.png",
    link: <a href="https://weather-app.sourav2425.repl.co" />,
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    if (item.link && item.link.props.href) {
      // Redirect to the specified link when the "Demo" button is clicked
      window.location.href = item.link.props.href;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>Demo</button>
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
