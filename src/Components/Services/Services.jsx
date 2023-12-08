import { useRef } from "react";
import "./Services.scss";
import { easeIn, easeInOut, motion, useInView } from "framer-motion";
import Contact from "../Contact/Contact";
// import { useNavigate, Link } from "react-router-dom";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  // const navigate = useNavigate();

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your Brand Grow
          <br /> and Move Forward
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="titleContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="/people.webp" alt="image" />
          <h1>
            <b>Unique </b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b> For Your </b>Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div
        className="listContainer"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="BOX"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Stand out with a unique brand identity! I blend creativity and
            strategy to create a memorable brand that connects with your
            audience and sets you apart.
          </p>

          <motion.button>Go</motion.button>
        </motion.div>

        <motion.div
          className="BOX"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>SEO</h2>
          <p>
            Boost your online presence with smart SEO strategies. I enhance
            visibility, draw organic traffic, and maximize your reach for
            sustainable business growth.
          </p>

          <button>Go</button>
        </motion.div>

        <motion.div
          className="BOX"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Development</h2>
          <p>
            Tailoring powerful websites that fit your needs. I create smooth,
            user-friendly experiences with cutting-edge features for optimal
            functionality.
          </p>

          <button>Go</button>
        </motion.div>

        <motion.div
          className="BOX"
          whileHover={{ background: "orange", color: "black" }}
        >
          <h2>Hosting</h2>
          <p>
            Offering reliable and secure hosting solutions for top-notch website
            performance. Count on us for seamless digital experiences and
            uninterrupted service.
          </p>

          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
