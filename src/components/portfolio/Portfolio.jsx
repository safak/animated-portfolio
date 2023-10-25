import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";


const items = [
    {
        id:1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta in, dolore eos suscipit explicabo inventore cupiditate earum eaque quibusdam reprehenderit, obcaecati qui distinctio."
    },
    {
        id:2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta in, dolore eos suscipit explicabo inventore cupiditate earum eaque quibusdam reprehenderit, obcaecati qui distinctio."
    },
    {
        id:3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/17986565/pexels-photo-17986565/free-photo-of-sadboi.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta in, dolore eos suscipit explicabo inventore cupiditate earum eaque quibusdam reprehenderit, obcaecati qui distinctio."
    },
    {
        id:4,
        title: "Music App",
        img: "https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dicta in, dolore eos suscipit explicabo inventore cupiditate earum eaque quibusdam reprehenderit, obcaecati qui distinctio."
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start" , "end start"]
    });

    const y = useTransform(scrollYProgress, [0,1], [-100,300])
    return (
        <section >
            <div className="container">
                <div className="wrapper" >
                    <div className="imgContainer" ref={ref}>
                     <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>see Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div 
            className="progressBar"
            style={{ scaleX }}
            ></motion.div>
        </div>
        {items.map((item,index) => (
            <Single item={item} key={index} />
        ))}
    </div>
  )
}

export default Portfolio