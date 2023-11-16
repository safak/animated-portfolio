import "./Services.scss"
import { motion, useInView } from "framer-motion";
import { useRef, useState} from "react";
import Modal from "./Modal";


const honorsData = {
    '2023 Monash University Postgraduate Industry Experience Winner': {
      description: 'Student Vote Postgraduate Industry Experience Winner',
      imageUrl: "/expo_win.png", 
    },
    '2022 Commendation of academic performance': {
        description: 'Receiving High Distinctions in all Semester 1, 2022 units. Issued by Dr Lan Du, Director, Postgraduate Studies Faculty of Information Technology.',
        imageUrl: "/honor_s1.png", 
    }
  };

  const certData = {
    'Monash Postgraduate Expo Participation': {
      description: '',
      imageUrl: "/expo_cert.png", 
    },
    'Data Analytics and Visualization Virtual Experience Program': {
        description: '',
        imageUrl: "/cert_acc.png", 
    },
    'Introduction to Programming Using Python': {
        description: '',
        imageUrl: "/cert_python.png", 
    },
  };

  const expData = {
    'Data Analyst': {
      description: 'Student Vote Postgraduate Industry Experience Winner',
      imageUrl: "/exp_formosa.webp", 
    },
    'Administrative Assistant': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/exp_airoha.webp",
    },
    'Office Assistant': {
        description: 'Student Vote Postgraduate Industry Experience Winner',
        imageUrl: "/exp_nia.png",
    },
  };

const educationData = {
    'Administrative Assistant': {
        description: 'Details about the Master of Science program',
        imageUrl: "/edu_monash.png", // Replace with the actual path to your image
    },
    '2 2022-2023 Bachelor of Data Science': {
        description: 'Details about the Bachelor of Science program',
        imageUrl: "/edu_fju.png", // Replace with the actual path to your image
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
            {/* <motion.div className="textContainer">
                <p>About my story</p>
                <hr />
            </motion.div> */}
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/ta11.JPG" alt="" />
                    <h1>
                        <motion.b whileHover={{color:"#dda15e"}}>About me, </motion.b>
                    </h1>
                </div>
                <div className="title">
                    <h1>
                    My Journey in <motion.b whileHover={{color:"#dda15e"}}>Data Science</motion.b>
                    </h1>
                    <a href="#Gallery"><button>View My Projects</button></a>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2>Education</h2>
                    <ul>
                        <li>Master of Data Science</li>
                        <li>Bachelor of English Language and Literature</li>
                    </ul>
                    <motion.button  onClick={() => handleButtonClick("Education")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2>Experience</h2>
                    <ul>
                        <li>Data Engineer @ Formosa Massage Therapy</li>
                        <li>Administrative Assistant @ Airoha Technology Corp.</li>
                        <li>Office Assistant @ NIA Taiwan</li>
                    </ul>
                    <motion.button  onClick={() => handleButtonClick("Experience")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2>Certificates</h2>
                    <ul>
                        <li>Monash Postgraduate Expo</li>
                        <li>Accenture Data Analytics and Visualization Virtual Experience Program</li>
                        <li>Microsoft Introduction to Programming Using Python</li>
                    </ul>
                    <motion.button onClick={() => handleButtonClick("Certificates")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2>Honors</h2>
                    <ul>
                        <li>Monash University Postgraduate Industry Experience Winner</li>
                        <li>2022 Commendation of Academic Performance</li>
                    </ul>
                    <motion.button onClick={() => handleButtonClick("Honors")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
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