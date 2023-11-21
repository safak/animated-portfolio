import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Card.scss"; 

const projects = [
    {
      id: 1,
      images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
      title: 'Secure Cyclist',
      type: 'Chart.js',
      language: 'SQL',
      technology: 'Azure',
      description: 'something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...something...',
      link: '/project-one'
    },
    {
      id: 2,
      images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
      title: 'Taiwan Travel Map',
      type: 'Dashboard',
      language: 'R Shiny',
      technology: 'Interative',
      description: 'A brief introduction of Project One...',
      link: '/project-one'
    },
    {
      id: 3,
      images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
      title: 'Another Aspect of Stack Overflow Survey',
      type: 'Data Exploration',
      language: 'R',
      technology: 'Data Vis',
      description: 'A brief introduction of Project One...',
      link: '/project-one'
    },
    {
      id: 4,
      images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
      title: 'Melbourne Blackspot Analysis',
      type: 'Data Analysis',
      language: 'PostgreSQL',
      technology: 'Dbeaver',
      description: '',
      link: '/project-one'
    },
    {
      id: 5,
      images: 'pj_dw.png',
      title: 'Data Warehouse',
      type: 'Data Warehouse',
      language: 'Data Engineer',
      technology: 'SQL',
      description: '',
      link: '/project-one'
    },
    {
      id: 6,
      images: 'pj_ml.png',
      title: 'Machine Learning',
      type: 'ML',
      language: 'Deep Learning',
      technology: 'Python',
      description: 'A brief introduction of Project One...',
      link: '/project-one'
    },
    {
      id: 7,
      images: 'pj_lda.png',
      title: 'Semi-Structured Data Analysis',
      type: 'NLP',
      language: 'Topic Modeling',
      technology: 'LDA',
      description: 'A brief introduction of Project One...',
      link: '/project-one'
    },
    {
      id: 8,
      images: 'pj_flight.png',
      title: 'Flight Analysis',
      type: 'Data Visualization',
      language: 'R',
      technology: 'Tableau',
      description: 'A brief introduction of Project One...',
      link: '/project-one'
    }
  ];
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



const Card = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState([{}]);
    useEffect(() => {
        const imageIndices = projects.reduce((acc, project) => {
            acc[project.id] = 0;
            return acc;
        }, {});
        setCurrentImageIndex(imageIndices);
    }, []);
    
    const nextImage = (projectId, imageCount) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] + 1) % imageCount
        }));
    };
    
    const prevImage = (projectId, imageCount) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: (prev[projectId] - 1 + imageCount) % imageCount
        }));
    };

    const goToImage = (projectId, index) => {
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectId]: index
        }));
    };


  return (
    <div className="card">
        
        <div className="cardContainer">
            <h1 className="cardheader">Projects</h1>
            {projects.map(project => (
                    <motion.div key={project.id} layoutId={project.id} onClick={() => setSelectedId(project.id)} className="item">
                        <motion.h5 className="itemSubtitle">{project.title}</motion.h5>
                        <motion.h2 className="itemTitle">{project.technology}</motion.h2>
                    </motion.div>
                ))}
        </div>
        <div className="componentContainer">
                <AnimatePresence>
                    {selectedId && (
                        <motion.div className="midcontent" layoutId={selectedId}>
                            {projects.filter(project => project.id === selectedId).map(project=> (
                                <React.Fragment key={project.id}>
                                    
                                    
                        {/* <motion.div layoutId={selectedId} className="detailsContainer"> */}
                            {/* {projects.filter(project => project.id === selectedId).map(project=> (
                                <React.Fragment key={project.id}> */}
                                    
                                    {/* <motion.img className="itemImage" src={projects.image} alt={projects.title} /> */}
                                    
                                    <motion.h5 className="detailTitle">{project.title}</motion.h5>
                                    <motion.h2 className="detailDesc">{project.description}</motion.h2>
                                    <motion.div className="detailsContainer">
                                        {typeof currentImageIndex[project.id] !== 'undefined' && (
                                            <motion.img className="cimg" src={project.images[currentImageIndex[project.id]]} alt={project.title} />
                                        )}
                                        <motion.div className="dots">
                                        {project.images.map((_, index) => (
                                            <span
                                            key={index}
                                            className={`dot ${index === currentImageIndex[project.id] ? "active" : ""}`}
                                            onClick={() => goToImage(project.id, index)}
                                            ></span>
                                        ))}
                                        </motion.div>
                                        <motion.button onClick={() => prevImage(project.id, project.images.length)} className="navButton prevButton">&#171;</motion.button>
                                        <motion.button onClick={() => nextImage(project.id, project.images.length)} className="navButton nextButton">&#187;</motion.button>
                                    </motion.div>
                                    
                                    {/* <motion.button onClick={() => setSelectedId(null)} className="closeButton">Close</motion.button> */}
                                </React.Fragment>
                            ))}
                        </motion.div>
                        // </motion.div>
                    )}
                </AnimatePresence>
            </div>
    </div>
  );
};

export default Card;
