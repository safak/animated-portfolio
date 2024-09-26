import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import "./Swiper.scss"; 
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
    {
        id: 1,
        images: ["/Lenexa-logo.png"],
        images_desc: ["ongoing project..."],
        title: 'Ongoing: Lenexa Medical Dashboard with tableau',
        type: 'python',
        language: 'SQL',
        technology: 'Tableau',
        description: 'Building an interactive dashboard to replace current reports. Dashboard will be used by clients to monitor their performance and make data-driven decisions to avoid pressure injury.',
        link: 'https://lenexamedical.com/'
      },
    {
      id: 2,
      images: ["/seek.png"],
      images_desc: ["Automation web scraping with Selenium"],
      title: 'Ongoing: SEEK Web Scraping',
      type: 'python',
      language: 'LDA',
      technology: 'Semi-structured Data',
      description: 'This project presents a thorough approach to extracting and analysing job posting data from SEEK. Employing Python for robust web scraping, it enables to collect data needed for deep insights into job trends and requirements. ',
      link: 'https://github.com/chinnnying/seek_webscraping'
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
        link: 'https://github.com/chinnnying/animated-portfolio/tree/chinnnying'
      },
    {
        id: 3,
        images: ["/cyclist.png", "/sc_hazard.png", "/sc_spinner.png", "/sc_map.png", "/sc_news.png", "/sc_line.png", "/sc_bar.png", "/sc_bar2.png", "/sc_donut.png"],
        images_desc: ["Worked as a data scientist and frontend developer in this project (Landing page for the app)", "Showing past 20 years bike accidents on the suggested route", "Interactive information display design", "Converted data format, concatenated over 10 datasets and showed bike trail on Leaflet Map with customised markers", "UI/UX design", "Pointed out the importance of bike safety with increasing number of bikers with chart.js", "Highlight current time to easily compare with history data", "Highlight why bike safety should be aware of", "Showing the severity of past bike related accidents"],
        title: 'Secure Cyclist Web App',
        type: 'Chart.js',
        language: 'SQL',
        technology: 'Azure',
        description: 'Secure Cyclist is designed to ensure the safety and well-being of international students who commute via bicycle in Victoria. Leveraging the power of open data on car accidents, our project provides valuable insights into the dynamics of bicycling in Victoria, ultimately facilitating safer and more informed trips for cyclists.',
        link: 'https://github.com/chinnnying/secure_cyclist'
      },
    {
      id: 4,
      images: ["/tw_landing.png", "/tw_filter.png", "/tw_cluster.png", "/tw_list.png", "/tw_popup.png"],
      images_desc: ["Taiwan Travel Map Dashboard Landing page (build with R shiny)", "Interactive filter feature", "Easy to explore with clustering nearby tourist spots", "Allow search by keywords", "Providing detailed information of the location"],
      title: 'Taiwan Travel Map Dashboard',
      type: 'Dashboard',
      language: 'R Shiny',
      technology: 'Interative',
      description: 'A dynamic and interactive dashboard crafted to empower travelers with the essential information needed to explore and plan their journeys across island of Taiwan. This platform offers information of restaurants, accommodations, events, and scenic spots.',
      link: 'https://github.com/chinnnying/taiwan_travel_map'
    },
    {
      id: 5,
      images: ["/stk_landing.png", "/stk_bar.png","/stk_line.png", "/stk_heatmap.png"],
      images_desc: ["Show respondants distribution by joining extra dataset (country name and its coordinate)", "Investigate if education background affect salary", "Explore how developers learn to code nowaways by age group", "Heatmap of most popular technology and salary of developers used it at work"],
      title: 'Stack Overflow Survey Insights',
      type: 'Data Exploration',
      language: 'R',
      technology: 'Data Vis',
      description: 'This project explores the demographics, earnings, and learning journeys of contributors. Beyond Stack Overflow\'s own analysis, this endeavor provides a unique perspective, enriching our understanding of the global coding community.',
      link: 'https://github.com/chinnnying/stack_overflow_analysis'
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
        description: 'This project analyses spatial data to assess PTV\'s coverage and pinpoints any underserved areas, providing stakeholders with insights to improve public transport accessibility, reduce commute times, and support the evolving workstyle needs of Victoria\'s residents.',
        link: 'https://github.com/chinnnying/ptv_blankspot'
      },
  ];


const ProfilesSwiper = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);

  // Effect to update slidesPerView on window resize
  useEffect(() => {
    const handleResize = () => {
        // Set slidesPerView to 1 if window width is less than or equal to 768px
        if (window.innerWidth <= 768) {
          setSlidesPerView(1);
        }
        // Set slidesPerView to 2 if window width is greater than 768px and less than or equal to 1024px
        else if (window.innerWidth > 768 && window.innerWidth <= 1400) {
          setSlidesPerView(2);
        }
        // Set slidesPerView to 3 for widths greater than 1024px
        else {
          setSlidesPerView(3);
        }
      };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially in case the initial window size is small
    handleResize();

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="swiper-container">
    <div className="project-header">
    <h1 className="swiper-head">Projects<span>.
    <a href="#Contact"><button>Contact Me</button></a>
    </span>
    </h1>
    </div>
    <Swiper
      slidesPerView={slidesPerView}
      navigation={true}
      spaceBetween={50}
      pagination={{ clickable: true }}
      modules={[Navigation,Pagination]}
      className="mySwiper"
    >
      {projects.map((profile, index) => (
        <SwiperSlide key={index} className="swiper-slide">
            <div className="features">
                <p className="feature">{profile.type}</p>
                <p className="feature">{profile.language}</p>
                <p className="feature">{profile.technology}</p>
            </div>
            <div className="swiper-img">
              <img src={profile.images[0]} alt={profile.title} />
            </div>
            <div className="swiper-content">
              <h3>{profile.title}</h3>
              <p>{profile.description}</p>
            </div>
            <div className="swiper-footer">
                <button onClick={() => window.open(profile.link, '_blank')}>View More</button>
            </div>
         
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default ProfilesSwiper;
