import React from 'react';
import './Gallery.scss';
import { motion } from 'framer-motion';
const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        }
    }
  }
  
const projects = [
  {
    id: 1,
    image: 'cyclist.png',
    title: 'Secure Cyclist',
    type: 'React.js',
    language: 'Node.js',
    technology: 'Front End',
    description: '',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'sc_bar.png',
    title: 'Secure Cyclist',
    type: 'Chart.js',
    language: 'SQL',
    technology: 'Azure',
    description: '',
    link: '/project-one'
  },
  {
    id: 2,
    image: 'tw_landing.png',
    title: 'Taiwan Travel Map',
    type: 'Dashboard',
    language: 'R Shiny',
    technology: 'Interative',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 3,
    image: 'stk_landing.png',
    title: 'Another Aspect of Stack Overflow Survey',
    type: 'Data Exploration',
    language: 'R',
    technology: 'Data Vis',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 4,
    image: 'pj_lga.png',
    title: 'Flight Analysis',
    type: 'Data Analysis',
    language: 'PostgreSQL',
    technology: 'Dbeaver',
    description: '',
    link: '/project-one'
  },
  {
    id: 5,
    image: 'pj_dw.png',
    title: 'Project One',
    type: 'Data Warehouse',
    language: 'Data Engineer',
    technology: 'SQL',
    description: '',
    link: '/project-one'
  },
  {
    id: 6,
    image: 'pj_ml.png',
    title: 'Project One',
    type: 'ML',
    language: 'Deep Learning',
    technology: 'Python',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 7,
    image: 'pj_lda.png',
    title: 'Project One',
    type: 'NLP',
    language: 'Topic Modeling',
    technology: 'LDA',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 8,
    image: 'pj_flight.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'R',
    technology: 'Tableau',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 9,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  
];
const cardHeight = 200; 
const gapHeight = 20; 
const totalHeight = (cardHeight + gapHeight) * projects.length /2;

const scrollVariants = {
    animateUp: {
      y: [-totalHeight, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5 * projects.length /2,
          ease: "linear"
        }
      }
    },
    animateDown: {
      y: [0, -totalHeight],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5 * projects.length /2,
          ease: "linear"
        }
      }
    }
  };

const Gallery = () => {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="gallery">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Hi, I'm Chinying!</motion.h2>
                    <motion.h1 variants={textVariants}>A Data Scientist</motion.h1>
                    <motion.h3 variants={textVariants}>with 10+ projects </motion.h3>
                    {/* <div className="social">
                    <a href="#"><img src="/linkedin.png" alt=""/></a>
                    <a href="#"><img src="/github.png" alt=""/></a>
                    </div> */}
                    <motion.div variants={textVariants} className="buttons">
                      <a href="#Experience"><motion.button  variants={textVariants} >About me</motion.button></a>
                      {/* <a href="#Experience"><motion.button  variants={textVariants} >View my projects</motion.button></a> */}
                        {/* <motion.button  variants={textVariants} >Portfolio</motion.button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
                </motion.div>
                <motion.div className="slidingtextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate">
                    hello hello hello hello
                </motion.div>
                <div className="imageContainer">
                {/* <img src="/71.png" alt="" /> */}
                </div>


            </div>
    {/* <div className="header">project
    <div className="content">The ProjectGallery component renders two motion.div elements, each with a variants prop corresponding to the scroll direction we want. The first column uses the animateUp variant, and the second column uses the animateDown variant. We use the filter method to distribute projects into two columns based on their index.</div>
    <img src="/71.png" alt="" />
    </div> */}
    
      {/* <motion.div
        className="column"
        variants={scrollVariants}
        animate="animateUp"
        initial={{ y: 0 }}
      >
        
        {projects.concat(projects).filter((_, index) => index % 2 === 0).map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
      </motion.div> */}
      <motion.div
        className="column"
        variants={scrollVariants}
        animate="animateDown"
        initial={{ y: -100 * projects.length }}
      >
        {projects.concat(projects).map((project, index) => (
        <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <div className="info-tags">
          <div className="tag">{project.type}</div>
          <div className="tag">{project.language}</div>
          <div className="tag">{project.technology}</div>
        </div>
        <div className="overlay">
          <div className="title">{project.title}</div>
          <div className="description">{project.description}</div>
          <button onClick={() => window.location.href = project.link}>Check out the project</button>
        </div>
      </div>
    );
  };

export default Gallery;
