import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "./Card.scss"; 

const projects = [
    {
        id: 1,
        images: ["/exp_formosa.webp"],
        images_desc: ["ongoing project..."],
        title: 'Ongoing: Formosa Massage Data Pineline',
        type: 'python',
        language: 'SQL',
        technology: 'Visualisation',
        description: 'Formosa Massage is a massage therapy located in TAS. The project is to build a data pipeline to collect data from the shop\'s booking system, and then analyse the data to provide insights for the shop owner to make business decisions.',
        link: '/project-one'
      },
    {
      id: 2,
      images: ["/seek.png"],
      images_desc: ["Automation web scraping with Selenium"],
      title: 'Ongoing: SEEK Web Scraping',
      type: 'python',
      language: 'LDA',
      technology: 'Semi-structured Data Analysis',
      description: 'This project presents a thorough approach to extracting and analysing job posting data from SEEK. Employing Python for robust web scraping, it enables to collect data needed for deep insights into job trends and requirements. ',
      link: '/project-one'
    },
    {
        id: 8,
        images: ["/port_landing.png", "/port_exp.png", "/port_skill.png"],
        images_desc: ["Landing page", "Experience", "Skills"],
        title: 'Personal portfolio',
        type: 'javascript',
        language: 'React',
        technology: 'framer-motion',
        description: 'An interactive portfolio website to practice and showcase my projects and skills.',
        link: '/project-one'
      },
    {
        id: 3,
        images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
        images_desc: ["Worked as a data scientist and frontend developer in this project (Landing page for the app)", "Showing past 20 years bike accidents on the suggested route", "Interactive information display design", "Converted data format, concatenated over 10 datasets and showed bike trail on Leaflet Map with customised markers", "UI/UX design", "Pointed out the importance of bike safety with increasing number of bikers with chart.js", "Highlight current time to easily compare with history data", "Highlight why bike safety should be aware of", "Showing the severity of past bike related accidents"],
        title: 'Secure Cyclist Web App',
        type: 'Chart.js',
        language: 'SQL',
        technology: 'Azure',
        description: 'Secure Cyclist is a comprehensive initiative designed to ensure the safety and well-being of international students who commute via bicycle in the vibrant region of Victoria. Leveraging the power of open data on car accidents, our project seeks to provide valuable insights into the dynamics of bicycling in Victoria, ultimately facilitating safer and more informed trips for cyclists.',
        link: '/project-one'
      },
    {
      id: 4,
      images: ["/tw_landing.png", "/tw_filter.png", "/tw_cluster.png", "/tw_list.png", "/tw_popup.png"],
      images_desc: ["Taiwan Travel Map Dashboard Landing page (build with R shiny)", "Interactive filter feature", "Easy to explore with clustering nearby tourist spots", "Allow search by keywords", "Providing detailed information of the location"],
      title: 'Taiwan Travel Map Dashboard',
      type: 'Dashboard',
      language: 'R Shiny',
      technology: 'Interative',
      description: 'Taiwan Travel Map is a dynamic and interactive dashboard meticulously crafted to empower travelers with the essential information needed to explore and plan their journeys across the captivating island of Taiwan. This platform offers insights into a wide array of establishments and attractions, including restaurants, accommodations, events, and scenic spots.',
      link: '/project-one'
    },
    {
      id: 5,
      images: ["/stk_landing.png", "/stk_bar.png","/stk_line.png", "/stk_heatmap.png"],
      images_desc: ["Show respondants distribution by joining extra dataset (country name and its coordinate)", "Investigate if education background affect salary", "Explore how developers learn to code nowaways by age group", "Heatmap of most popular technology and salary of developers used it at work"],
      title: 'Stack Overflow Survey Insights',
      type: 'Data Exploration',
      language: 'R',
      technology: 'Data Vis',
      description: 'This project explores the demographics, earnings, and learning journeys of contributors to the coding community, aiming to uncover who these contributors are, their income levels, and how they acquire coding skills. Beyond Stack Overflow\'s own analysis, this endeavor provides a unique perspective, enriching our understanding of the global coding community.',
      link: '/project-one'
    },
    {
      id: 6,
      images: ["/rfds_1.png", "/rfds_2.png", "/rfds_3.png", "/rfds_4.png", "/rfds_5.png"],
      images_desc: ["Identify outliers (extreme and unusal value)", "Remove duplicated data (same aircraft shouldn\'t have 2 depature time)", "Aggregate with different granularity (by month & week)", "Aggregate with different granularity (by sum & average)", "Geo visualisation for flight distribution by aircraft type"],
      title: 'RDBS Visualisation with Tableau',
      type: 'Data cleaning',
      language: 'Tableau',
      technology: 'Data Vis',
      description: 'The goal of the project is to understand the operation patterns of Royal Flying Doctor Service (RFDS flights), active 24/7 in providing emergency medical services across rural and remote Australia with Tableau. Anomalies (i.e. outliers, duplicates, null) were identified and handled before visualisation.',
      link: '/project-one'
    },
    {
        id: 7,
        images: ["/ptv_plan.png" , "ptv_tech.png", "/pj_lga.png"],
        images_desc: ["Project plan", "Tools used in this project", "Insights: Data visualisation of blankspot areas of Melbourne"],
        title: 'PTV Blankspot Spatial Data Analysis',
        type: 'Spatial Data',
        language: 'PostgisSQL',
        technology: 'Dbeaver',
        description: 'This project analyzes spatial data to assess PTV\'s coverage, pinpoint any underserved areas, and identify regions with the best transport options, providing stakeholders with insights to improve public transport accessibility, reduce commute times, and support the evolving workstyle needs of Victoria\'s residents.',
        link: '/project-one'
      },
  ];
 



  const Card = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState([{}]);
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded); 
    };

    const handleSelect = () => {
        if (isMobile) {
          setIsExpanded(false);
        }
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
    //const isPhone = window.innerWidth <= 600;
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
                            <motion.div key={project.id} custom={index} variants={itemVariants} onClick={() => {
                                setSelectedId(project.id);
                                handleSelect();
                              }} className="item">
                                <h5 className="itemSubtitle">{project.title}</h5>
                                {/* <h2 className="itemTitle">{project.technology}</h2> */}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
            <div className={componentContainerClass}>
                {!selectedId && (
                    <p className="beforeselect">Please select a project <br/> &#128072;&#127995;&#128072;&#127996;&#128072;&#127997;&#128072;&#127998; </p>
                )}
                {selectedId && (
                    <div className="midcontent">
                        {projects.filter(project => project.id === selectedId).map(project => (
                            <React.Fragment key={project.id}>
                                <motion.h5 initial="hidden" animate="visible" variants={variants} className="detailTitle">
                                    {project.title}
                                </motion.h5>
                                <motion.div className="detailFeaturebox" initial="hidden" animate="visible" variants={variants}>
                                <motion.div className="detailFeature" variants={variants}>{project.type}</motion.div>
                                <motion.div className="detailFeature" variants={variants}>{project.language}</motion.div>
                                <motion.div className="detailFeature" variants={variants}>{project.technology}</motion.div>
                                </motion.div>
                                <motion.h2 initial="hidden" animate="visible" variants={variants} className="detailDesc">
                                    {project.description}
                                </motion.h2>
                                <motion.div initial="hidden" animate="visible" variants={variants} className="detailsContainer">
                                    {typeof currentImageIndex[project.id] !== 'undefined' && (
                                        <>
                                            <img className="cimg" src={project.images[currentImageIndex[project.id]]} alt={project.title} />
                                            <p className="imageDescription">
                                                {project.images_desc[currentImageIndex[project.id]]}
                                            </p>
                                        </>
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