import "./Services.scss"
import { motion, useInView } from "framer-motion";
import { useRef, useState} from "react";
import Modal from "./Modal";


const honorsData = {
    'OCT 2023 Postgraduate Industry Experience Winner': {
      description: 'Student Vote Postgraduate Industry Experience Winner',
      imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
  };

  const certData = {
    'OCT 2023 Postgraduate Industry Experience Winner': {
      description: 'Student Vote Postgraduate Industry Experience Winner',
      imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
  };

  const expData = {
    'OCT 2023 Postgraduate Industry Experience Winner': {
      description: 'Student Vote Postgraduate Industry Experience Winner',
      imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
    'OCT 2023 Postgraduate Industry Experience Winner': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/people.webp", // Replace with the actual path to your image
    },
  };

const educationData = {
    '2022-2023 Master of Data Science': {
        description: 'Details about the Bachelor of Science program',
        imageUrl: "/education.webp", // Replace with the actual path to your image
    },
    '2022-2023 Master of Data Science': {
        description: 'Details about the Bachelor of Science program',
        imageUrl: "/education.webp", // Replace with the actual path to your image
    },};
    

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
}

const Services = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const ref = useRef();
    const isInView = useInView(ref,{margin: "-100px"});

    const handleButtonClick = (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
      };
    
      const getCategoryData = () => {
        switch (selectedCategory) {
            case "Education":
                return educationData;
            case "Honors":
                return honorsData;
            case "Certificates":
                return certData;
            case "Experience":
                return expData;
          default:
            return {};
        }
      };

    return (
        <motion.div className="services" 
                    variants={variants} 
                    //initial="initial" 
                    animate={isInView && "animate"}
                    ref={ref}
                    >
            <motion.div className="textContainer">
                <p>About my story</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Best</motion.b> Candidate
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color:"orange"}}>Building</motion.b> Success with.
                    </h1>
                    <a href="#Projects"><button>What I do?</button></a>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Education</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button  onClick={() => handleButtonClick("Education")} initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Experience</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button  onClick={() => handleButtonClick("Experience")} initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Certificates</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button onClick={() => handleButtonClick("Certificates")} initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"rgba(255, 255, 255, 0.6)", color: "black"}}>
                    <h2>Honors</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        libero enim nisi aliquam consectetur expedita magni eius ex corrupti
                        animi! Ad nam pariatur assumenda quae mollitia libero repellat
                        explicabo maiores?
                    </p>
                    <motion.button onClick={() => handleButtonClick("Honors")} initial={{ background: "transparent"}} whileHover={{background: "rgb(162, 255, 0)", color: "black", scale: 1.2}}>Detail</motion.button>
                    {/* <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        // trailName={selectedTrailName}
                    /> */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        category={selectedCategory}
                        data={getCategoryData()}
                        />
                    

                </motion.div>
            </motion.div>
        </motion.div>
    )



}

export default Services;