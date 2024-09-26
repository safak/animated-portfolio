import React, {useState} from 'react';
import './Project.scss';
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
    id: 0,
    images: ["cyclist.png", "sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
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

const Project = () => {
  const [hovered, setHovered] = React.useState(null);

  const handleMouseEnter = (id) => {
    setHovered(id);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  // State for the selected project
  const [selectedProject, setSelectedProject] = React.useState(projects[0]);

  // Event handler for selecting a project
  const selectProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(project);
  };

  // Render the selected project details
  const renderSelectedProject = () => {
    if (!selectedProject) return null;
    return (
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 variants={textVariants}>{selectedProject.title}</motion.h1>
        <motion.h5 variants={textVariants}>{selectedProject.description}
        </motion.h5>
        <motion.div variants={textVariants} className="buttons">
                      <a href="#Experience"><motion.button  variants={textVariants} >Go to Github</motion.button></a>
                      {/* <a href="#Experience"><motion.button  variants={textVariants} >View my projects</motion.button></a> */}
                        {/* <motion.button  variants={textVariants} >Portfolio</motion.button> */}
        </motion.div>
      </motion.div>
    );
  };

  const renderProjectImages = () => {
    if (!selectedProject || !selectedProject.images) return null;
    return selectedProject.images.map((image, index) => (
      
        <ProjectCard key={index} project={image} />
      
    ));
  };


  return (
    <div className="project">
        
            <div className="wrapper">
            
                <div class="dropdown">
                      <button class="dropbtn">My projects &#8964;</button>
                      <div class="dropdown-content">
                      {projects.map(project => (
                        <a href="#" onClick={() => selectProject(project.id)}>Link {project.id}</a>
                      ))}
                      </div>
                </div>
                
                {renderSelectedProject()}
                
                
                
                <motion.div className="slidingtextContainer"
                    variants={sliderVariants}
                    initial="initial"
                    animate="animate">
                    project project project
                </motion.div>
            </div>
            <motion.div
                className="column"
                variants={scrollVariants}
                animate="animateDown"
                initial={{ y: -100 * selectedProject.images.length }}
              >
            {renderProjectImages()}
            </motion.div>
                
      
    </div>
  );
};

const ProjectCard = ({ project }) => {
    return (
      <div className="project-card">
         <img src={project} alt="Project" />
         
      </div>
    );
  };

export default Project;