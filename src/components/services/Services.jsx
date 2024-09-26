import "./Services.scss"
import { motion, useInView } from "framer-motion";
import { useRef, useState} from "react";
import Modal from "./Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

const honorsData = {
    '2023 Monash University Postgraduate Industry Experience Winner': {
      description: 'Winner of Student Vote Project of Monash University Postgraduate Industry Experience.',
      imageUrl: "/expo_win.png", 
    },
    '2022 Commendation of academic performance': {
        description: 'Receiving High Distinctions in all Semester 1, 2022 units. Issued by Dr Lan Du, Director, Postgraduate Studies Faculty of Information Technology.',
        imageUrl: "/honor_s1.png", 
    }
  };

  const certData = {
    'Cognizant Artificial Intelligence Job Simulation': {
        description: 'Completed a job simulation focused on AI for Cognizant’s Data Science team. Conducted exploratory data analysis using Python and Google Colab for one of Cognizant’s technology-led clients, Gala Groceries. Communicated findings and analysis in the form of a PowerPoint slide to present the results back to the business.',
        imageUrl: "/cert_ai.png", 
      },
    'AWS Solution Architecture Job Simulation': {
      description: 'Designed and simple and scalable hosting architecture based on Elastic Beanstalk for a client experiencing significant growth and slow response times. Described my proposed architecture in plain language ensuring my client understood how it works and how costs will be calculated for it.',
      imageUrl: "/cert_aws.png", 
    },
    'Awsome Day Online Conference': {
        description: 'Attended a one-day online conference on AWS.',
        imageUrl: "/cert_awsome.png", 
      },
    'Data Analytics and Visualization Virtual Experience Program': {
        description: 'Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture. Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions. Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders',
        imageUrl: "/cert_acc.png", 
    },
    'Introduction to Programming Using Python': {
        description: '',
        imageUrl: "/cert_python.png", 
    },
  };

  const expData = {
    'Data Science Intern @ Lenexa Medical': {
      description: 'Developing a automatic data pipeline for the business to present data visualisation with tableau (from AWS to tableau server). Cleaning and wrangling data with Python and SQL querys and optimising queries and memory use to reduce cost.',
      imageUrl: "/Lenexa-logo.png", 
    },
    'Administrative Assistant @ Airoha Technology Corp.': {
        description: 'File management, data entry and data management for over 20 years of files for a 1000-5000 size corportate.',
        imageUrl: "/exp_airoha.webp",
    },
    'Office Assistant @ NIA Taiwan': {
        description: 'Law enformemt & general office duties',
        imageUrl: "/exp_nia.png",
    },
  };

const educationData = {
    'Master of Data Science @ Monash University': {
        description: 'GPA3.5 2022-2023',
        imageUrl: "/edu_monash.png", 
    },
    'Bachelor of English Language and Literature @ FJU': {
        description: 'Taipei, Taiwan. 2013-2017',
        imageUrl: "/edu_fju.png",
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
const containerVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: { delay: 2.5,
                    staggerChildren: 1,
                    duration: 4 }
    }
  };
  
  const itemVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: { 
      opacity: 1 
    }
  };

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

      const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    
    const AnimatedText = ({ text }) => (
        <motion.h1>
            {text.split("").map((char, index) => (
                <motion.span key={index}
                             variants={letterVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{ delay: 0.05 * index }}>
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
    const AnimatedTextd = ({ text }) => (
        <motion.h1>
            {text.split("").map((char, index) => (
                <motion.span key={index}
                             variants={letterVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{ delay: 1 + 0.05 * index }}>
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
    

    return (
        <motion.div className="services" 
                    variants={variants} 
                    initial="initial" 
                    animate={"animate"}
                    ref={ref}
                    >
            <motion.div className="titleContainer">
                <div className="title">
                    <img src="/ta11.JPG" alt="" />
                    <AnimatedText text="About me, " />
                </div>
                <div className="title">
                    <AnimatedTextd text="My Journey in Data Science" />
                    <a href="#Projects"><button>View My Projects</button></a>
                </div>
            </motion.div>
            <motion.div className="listContainer"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}>
                                               
                <motion.div className="box" variants={itemVariants} initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2><FontAwesomeIcon icon={faBook} />  </h2>
                    <h3>Education</h3>
                    <ul>
                        <li>Master of Data Science @ Monash University</li>
                        <li>Bachelor of English Language and Literature @ FJU</li>
                    </ul>
                    <motion.button  onClick={() => handleButtonClick("Education")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" variants={itemVariants} initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2><FontAwesomeIcon icon={faLaptop} /> </h2>
                    <h3>Experience</h3>
                    <ul>
                        <li>Data Scientist Intern @ Lenexa Medical</li>
                        <li>Administrative Assistant @ Airoha Technology Corp.</li>
                        <li>Office Assistant @ NIA Taiwan</li>
                    </ul>
                    <motion.button  onClick={() => handleButtonClick("Experience")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" variants={itemVariants} initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2> <FontAwesomeIcon icon={faPenToSquare} /> </h2>
                    <h3>Certificates</h3>
                    <ul>
                        <li>Cognizant Artificial Intelligence Job Simulation</li>
                        <li>AWS Solution Architecture Job Simulation</li>
                        <li>Accenture Data Analytics Virtual Experience Program</li>
                        {/* <li>Microsoft Introduction to Programming Using Python</li> */}
                    </ul>
                    <motion.button onClick={() => handleButtonClick("Certificates")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
                </motion.div>
                <motion.div className="box" variants={itemVariants} initial={{ background: "transparent"}} whileHover={{background:"#eaeaea6e", color: "black"}}>
                    <h2> <FontAwesomeIcon icon={faMedal} /> </h2>
                    <h3>Honours</h3>
                    <ul>
                        <li>Monash University Postgraduate Industry Experience Winner</li>
                        <li>2022 Commendation of Academic Performance</li>
                    </ul>
                    <motion.button onClick={() => handleButtonClick("Honors")} initial={{ background: "transparent"}} whileHover={{background: "#fa9a2c", color: "black", scale: 1.2}}>Detail</motion.button>
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