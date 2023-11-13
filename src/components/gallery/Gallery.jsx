import React from 'react';
import './Gallery.scss';
import { motion } from 'framer-motion';

// Dummy data for the gallery
const projects = [
  {
    id: 1,
    image: 'tw_landing.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_landing.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_landing.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_landing.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_filter.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
    image: 'tw_landing.png',
    title: 'Project One',
    type: 'Data Visualization',
    language: 'JavaScript',
    technology: 'D3.js',
    description: 'A brief introduction of Project One...',
    link: '/project-one'
  },
  {
    id: 1,
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
    <div className="header">project
    <div className="content">The ProjectGallery component renders two motion.div elements, each with a variants prop corresponding to the scroll direction we want. The first column uses the animateUp variant, and the second column uses the animateDown variant. We use the filter method to distribute projects into two columns based on their index.</div>
    
    </div>
    
      <motion.div
        className="column"
        variants={scrollVariants}
        animate="animateUp"
        initial={{ y: 0 }}
      >
        
        {projects.concat(projects).filter((_, index) => index % 2 === 0).map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
      <motion.div
        className="column"
        variants={scrollVariants}
        animate="animateDown"
        initial={{ y: -100 * projects.length }}
      >
        {projects.concat(projects).filter((_, index) => index % 2 !== 0).map((project, index) => (
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
