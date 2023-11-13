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
  }
];

const scrollVariants = {
    animateUp: {
      y: [-100 * projects.length, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10 * projects.length,
          ease: "linear"
        }
      }
    },
    animateDown: {
      y: [0, -100 * projects.length],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10 * projects.length,
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
      {projects.map((project) => (
        <div
          key={project.id}
          className={`project ${hovered === project.id ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(project.id)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={project.image} alt={project.title} />
          <div className="info-tags">
            <div className="tag">{project.type}</div>
            <div className="tag">{project.language}</div>
            <div className="tag">{project.technology}</div>
          </div>
          <div className="overlay">
            <div className="text">{`${project.title}`}</div>
            {hovered === project.id && (
              <div className="description">
                <p>{project.description}</p>
                <button onClick={() => window.location.href = project.link}>Check out the project</button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
