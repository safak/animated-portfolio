import React from 'react';
import './Skill.scss';
import Bubble from './Bubble';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



//const getRandomDuration = () => 20 + Math.random() * 5; 
const services = [
  { id: 1, name: 'Data Analysis', icon: 'search' },
  { id: 2, name: 'Data Visualisation', icon: 'chart-line' },
  { id: 3, name: 'Machine Learning', icon: 'robot' },
  { id: 4, name: 'Data Warehouse', icon: 'database' },
  { id: 5, name: 'Web development', icon: 'code' },
  { id: 6, name: 'UI/UX design', icon: 'paint-brush' },
  
];

const ServiceItem = ({ icon, name }) => (
  <div className="service-item">
    {/* <FontAwesomeIcon icon={`fa-solid fa-${icon}`} /> */}
    <i className={`fas fa-${icon}`}></i>
    <div className="service-title">{name}</div>
  </div>
);

const skills = [
  { src: '/react.png', alt: 'React' },
  { src: '/node.png', alt: 'Node.js' },
  { src: '/html.png', alt: 'HTML' },
  { src: '/css.png', alt: 'CSS' },
  { src: '/javascript.png', alt: 'JavaScript' },
  { src: '/python.png', alt: 'Python' },
  { src: '/sql.png', alt: 'SQL' },
  { src: '/tableau.png', alt: 'Tableau' },
  { src: '/docker.png', alt: 'Docker' },
  { src: '/qgis.png', alt: 'QGIS' },
  { src: '/spark.png', alt: 'Spark' },
  { src: '/mongo.png', alt: 'MongoDB' },
];





const Skill = () => {
    // const bubbles = [
    //     { size: '250px', duration: getRandomDuration(), bg:'/javascript.png' },
    //     { size: '300px', duration: getRandomDuration(), bg:'/react.png' },
    //     { size: '375px', duration: getRandomDuration(), bg:'/node.png' },
    //     { size: '400px', duration: getRandomDuration(), bg:'/html.png' },
    //     { size: '300px', duration: getRandomDuration(), bg:'/r.png' },
    //     { size: '275px', duration: getRandomDuration(), bg:'/tableau.png' },
    //     { size: '350px', duration: getRandomDuration(), bg:'/tensorflow.png' },
    //     { size: '500px', duration: getRandomDuration(), bg:'/docker.png' },
    //     { size: '350px', duration: getRandomDuration(), bg:'/python.png' },
    //     // Add more bubbles as needed
    //   ];
    
    const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
        }
    }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1
        }
    };

    const arrow = {
        hidden: {
          y: -100, // Initial position above the view
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        visible: {
          y: 10, // End position below the view
          opacity: 1,
          transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "loop", // Makes the animation go back and forth
            repeatDelay: 1, // Delay before repeating the animation
          },
        },
      };
      const SkillComponent = ({ skill }) => {
        return (
          <motion.div className="sk" variants={item} whileHover={{ scale: 1, rotate: 360 }}>
            <img src={skill.src} alt={skill.alt} />
            {/* <p>{skill.description}</p> Uncomment this if you want to add descriptions */}
          </motion.div>
        );
      };
      

  return (
    <div className="skill">
      <motion.div className="skill-title" variants={container}
            initial="hidden"
            animate="visible">
        What I do?
        <a href="#Projects"><button>View My Projects</button></a>
      </motion.div>
      <div className="services-container">
        {services.map(service => (
          <ServiceItem key={service.id} icon={service.icon} name={service.name} />
        ))}
      </div>
      <motion.div className="skill-container"
            variants={container}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1}}>
        {skills.map((skill, index) => (
        <SkillComponent key={index} skill={skill} />
      ))}
      </motion.div>
      
      <motion.a href="#Projects" variants={arrow} initial="hidden"
      animate="visible" className="scroll-arrow">↓</motion.a>
      {/* {bubbles.map((bubble, index) => (
        <Bubble 
          key={index} 
          size={bubble.size} 
          duration={bubble.duration} 
          //bg={bubble.bg} 
        />
      ))} */}


      
    </div>
  );
};

export default Skill;
