import React, { useEffect, useState } from "react";
import "./Services.css";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleScroll = () => {
    const servicesContainer = document.querySelector('.services-container');
    const rect = servicesContainer.getBoundingClientRect();
    const currentScrollPosition = window.pageYOffset;
    const direction = currentScrollPosition > window.prevScrollPosition ? 'down' : 'up';
    
    window.prevScrollPosition = currentScrollPosition;

    if (direction === 'down' && rect.top <= window.innerHeight * 0.8) {
      setScrollDirection('down');
      setIsVisible(true);
    } else if (direction === 'up' && rect.top > window.innerHeight) {
      setScrollDirection('up');
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Store the initial scroll position
    window.prevScrollPosition = window.pageYOffset;
    
    // Add scroll event listener on component mount
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`services-container ${isVisible ? 'visible' : ''} ${scrollDirection === 'down' ? 'coming-from-right' : ''}`}>
      <h1 className="services-heading">Our Services</h1>
      <div className={`services-boxes ${isVisible ? 'visible' : ''}`}>
        <div className="service-box">
          <p className="service-text">Web Development</p>
        </div>
        <div className="service-box">
          <p className="service-text">Software Development</p>
        </div>
        <div className="service-box">
          <p className="service-text">Graphic Design</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
