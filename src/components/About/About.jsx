import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./about.scss";

const About = () => {
  const [openCategory, setOpenCategory] = useState("frontend");
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 900);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCategory = (category) => {
    if (isMobile) {
      setOpenCategory(openCategory === category ? null : category);
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const frontendTech = [
    { name: "HTML5", img: "/icons/HTML5.svg" },
    { name: "React.js", img: "/icons/React.svg" },
    { name: "Next.js", img: "/icons/Next.js.svg" },
    { name: "JavaScript", img: "/icons/JavaScript.svg" },
    { name: "TypeScript", img: "/icons/TypeScript.svg" },
    { name: "Tailwind CSS", img: "/icons/Tailwind CSS.svg" },
    { name: "Three.js", img: "/icons/Three.js.svg" },
    { name: "SCSS", img: "/icons/Sass.svg" },
  ];

  const backendTech = [
    { name: "Node.js", img: "/icons/Node.js.svg" },
    { name: "Express.js", img: "/icons/Express.svg" },
    { name: "Prisma", img: "/icons/Prisma.svg" },
    { name: "Postgres SQL", img: "/icons/PostgresSQL.svg" },
    { name: "Mongo DB", img: "/icons/MongoDB.svg" },
    { name: "Docker", img: "/icons/Docker.svg" },
  ];

  const renderSkills = (skills) => (
    <motion.div
      className="skills-grid"
      initial={{ height: 0, opacity: 0 }}
      animate={{
        height: "auto",
        opacity: 1,
      }}
      transition={{ duration: 0.4 }}
    >
      {skills.map((tech, index) => (
        <motion.div
          key={index}
          className="skill-card"
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 10px 25px rgba(255, 255, 255, 0.15)",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 8 }}
        >
          {tech.img ? (
            <img src={tech.img} alt={tech.name} />
          ) : (
            <div className="placeholder" />
          )}
          {tech.name && <p>{tech.name}</p>}
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <section className="about-section">
      <div className="about-container">
        {/* LEFT - About Me */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>

          <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
            I’m{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              KAZIM SAIYED
            </span>
            , a dedicated{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              MERN Stack Developer
            </span>{" "}
            with{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              3.5 years of experience
            </span>{" "}
            in creating modern, scalable, and high-performing web applications.
          </p>

          <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
            I’ve worked on{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              e-commerce platforms
            </span>
            ,{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              real estate web apps
            </span>{" "}
            and{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              job portals
            </span>
            , delivering clean, efficient, and user-friendly solutions.
          </p>

          <p style={{ lineHeight: 1.7 }}>
            As a{" "}
            <span style={{ color: "#00bcd4", fontWeight: 600 }}>
              freelance developer
            </span>
            , I value clear communication, attention to detail, and turning
            ideas into functional, production-ready products.
          </p>
          <motion.button onClick={() => handleScroll("contact")}>
            Contact Me
          </motion.button>
        </motion.div>

        {/* RIGHT - Skills */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Tools</h2>

          {/* FRONTEND */}
          <div
            className={`skills-category ${
              openCategory === "frontend" ? "open" : ""
            }`}
          >
            <div
              className="skills-header"
              onClick={() => toggleCategory("frontend")}
            >
              <h3>Frontend Technologies</h3>
              {isMobile && (
                <span>{openCategory === "frontend" ? "−" : "+"}</span>
              )}
            </div>
            {(!isMobile || openCategory === "frontend") &&
              renderSkills(frontendTech)}
          </div>

          {/* BACKEND */}
          <div
            className={`skills-category ${
              openCategory === "backend" ? "open" : ""
            }`}
          >
            <div
              className="skills-header"
              onClick={() => toggleCategory("backend")}
            >
              <h3>Backend Technologies</h3>
              {isMobile && (
                <span>{openCategory === "backend" ? "−" : "+"}</span>
              )}
            </div>
            {(!isMobile || openCategory === "backend") &&
              renderSkills(backendTech)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
