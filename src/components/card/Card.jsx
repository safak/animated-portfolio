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
 



  const Card = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState([{}]);
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded); 
    };

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
    const itemVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.08 }
        })
    };
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120 } }
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const componentContainerClass = `componentContainer ${isExpanded && isMobile ? 'hiddenOnMobile' : ''}`;
    const isPhone = window.innerWidth <= 600;
    const toggleButtonText = isExpanded ? 'Projects⌄' : 'Projects⌄';

    return (
        <div className="card">
            <div className="cardContainer">
                <h1 className="cardheader">
                    {(
                        <button onClick={toggleExpansion} className="cButton">
                            {toggleButtonText}
                        </button>
                    )}
                </h1>
                {isExpanded && (
                    <motion.div initial="hidden" animate="visible">
                        {projects.map((project, index) => (
                            <motion.div key={project.id} custom={index} variants={itemVariants} onClick={() => setSelectedId(project.id)} className="item">
                                <h5 className="itemSubtitle">{project.title}</h5>
                                <h2 className="itemTitle">{project.technology}</h2>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
            <div className={componentContainerClass}>
                {!selectedId && (
                    <p>click to view project</p>
                )}
                {selectedId && (
                    <div className="midcontent">
                        {projects.filter(project => project.id === selectedId).map(project => (
                            <React.Fragment key={project.id}>
                                <motion.h5 initial="hidden" animate="visible" variants={variants} className="detailTitle">
                                    {project.title}
                                </motion.h5>
                                <motion.h2 initial="hidden" animate="visible" variants={variants} className="detailDesc">
                                    {project.description}
                                </motion.h2>
                                <motion.div initial="hidden" animate="visible" variants={variants} className="detailsContainer">
                                    {typeof currentImageIndex[project.id] !== 'undefined' && (
                                        <img className="cimg" src={project.images[currentImageIndex[project.id]]} alt={project.title} />
                                    )}
                                    <div className="dots">
                                        {project.images.map((_, index) => (
                                            <span
                                                key={index}
                                                className={`dot ${index === currentImageIndex[project.id] ? "active" : ""}`}
                                                onClick={() => goToImage(project.id, index)}
                                            ></span>
                                        ))}
                                    </div>
                                    <button onClick={() => prevImage(project.id, project.images.length)} className="navButton prevButton">&#171;</button>
                                    <button onClick={() => nextImage(project.id, project.images.length)} className="navButton nextButton">&#187;</button>
                                </motion.div>
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;