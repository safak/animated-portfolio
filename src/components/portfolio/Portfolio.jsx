import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title: "DiagnoSym",
        img: "/projects/diagnosym.png",
        desc: "A pioneering medical health assistant website empowers users to self-diagnose by using a comprehensive questionnaire addressing their symptoms. Delivering personalized diagnosis results, recommended specialized doctors, and preventive measures, the platform prioritizes user well-being. With a commitment to continuous improvement, DiagnoSym values user feedback to enhance accuracy, accessibility, and overall healthcare experience.",
        git_link: "https://github.com/yuvavt/DiagnoSym",
    },
    {
        id: 2,
        title: "Douce Cravings",
        img: "/projects/doucecravings.png",        
        desc: "An innovative dessert-focused website streamlining the dessert ordering experience for users, offering a diverse range of treats. Implemented user-friendly features, including real-time tracking of recent activity and popular items, enhancing customer engagement. Designed a multi-tiered user system with distinct roles (admin, user, unregistered user) and corresponding permissions for efficient management.",
        git_link: "https://github.com/yuvavt/douce-cravings",
    },
    {
        id: 3,
        title: "Book Jam",
        img: "/projects/bookjam.png",        
        desc: "‘Book Jam’ enables users to browse, search and access a variety of books. It was created to function as both a digital library and a bookstore. The program intends to provide book lovers with an enjoyable and convenient experience that will make it easy for them to find and buy books.",
        git_link: "https://github.com/yuvavt/douce-cravings",
    },
    {
        id: 4,
        title: "Tracking Of Human Activities",
        img: "/projects/tracking.png",        
        desc: "Developed a system capturing live video for guardians to stay connected with their loved ones in real time. Implemented an emergency alert feature for immediate assistance during unexpected situations, emphasizing user safety. Enhanced family well-being through user-friendly design and innovative communication solutions.",
        git_link: "https://github.com/yuvavt/Tracking-of-Human-Activities",
    },
    {
        id: 5,
        title: "Dengue Alert System - A Life Savior",
        img: "/projects/dengue.png",        
        desc: "A comprehensive mobile application catering to three distinct user needs: individuals seeking self-diagnosis, those seeking valuable information on dengue precautions and measures, and those interested in regional statistics on dengue cases. This user-centric application provides a one-stop solution for health awareness, real-time diagnostics, and localized statistical insights, enhancing community well-being and knowledge dissemination.",
        git_link: "https://github.com/yuvavt/Dengue-Alert-System-A-Life-Saviour",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="Img" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.git_link} target="_blank" rel="noopener noreferrer" className="button">
                            View Code
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"], });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (<Single item={item} key={item.id} />))}
        </div>
    );
};

export default Portfolio
