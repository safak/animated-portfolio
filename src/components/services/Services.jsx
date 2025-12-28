import "./services.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const boxHover = {
  hover: {
    scale: 1.03,
    // backgroundColor: "lightgray",
    color: "black",
    transition: { duration: 0.3 },
  },
};
const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const serviceData = [
  {
    title: "branding",
    desc: "I help businesses build a consistent and memorable visual identity that connects with their audience.",
    tagline: "Crafting brands that people remember.",
  },
  {
    title: "design",
    desc: "I create modern, responsive designs focused on usability and aesthetic balance.",
    tagline: "Turning creativity into functional design.",
  },
  {
    title: "strategy",
    desc: "I work with clients to plan digital strategies that align with goals and deliver measurable growth.",
    tagline: "Smart strategies that deliver real results.",
  },
  {
    title: "development",
    desc: "I build full-stack web applications using the MERN stack — fast, scalable, and optimized for performance.",
    tagline: "Transforming ideas into live web experiences.",
  },
];

const Services = () => {
  const [selected, setSelected] = useState("branding");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="services">
      {/* Top Text */}
      <motion.div
        className="textContainer"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>

      {/* Title Section */}
      <motion.div
        className="titleContainer"
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b
              whileHover={{ color: "orange", scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Unique
            </motion.b>{" "}
            Idea
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b
              whileHover={{ color: "orange", scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              For Your
            </motion.b>{" "}
            Business.
          </h1>
          <button onClick={() => handleScroll("project")} id="/project">
            WHAT I DO?
          </button>
        </div>
      </motion.div>

      {/* List for Desktop */}
      {!isMobile && (
        <motion.div
          className="listContainer"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          {serviceData.map((item, i) => (
            <motion.div
              key={i}
              className="box"
              variants={boxHover}
              whileHover="hover"
            >
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <span className="tagline">{item.tagline}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Mobile View */}
      {isMobile && (
        <motion.div
          className="mobileContainer"
          initial="initial"
          whileInView="animate"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <div className="buttonRow">
            {serviceData.map((item) => (
              <button
                key={item.title}
                className={selected === item.title ? "active" : ""}
                onClick={() => setSelected(item.title)}
              >
                {item.title}
              </button>
            ))}
          </div>

          <motion.div
            key={selected}
            className="box"
            variants={boxHover}
            whileHover="hover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          >
            <h2>{selected}</h2>
            <p>{serviceData.find((s) => s.title === selected)?.desc}</p>
            <p>{serviceData.find((s) => s.title === selected)?.tagline}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
