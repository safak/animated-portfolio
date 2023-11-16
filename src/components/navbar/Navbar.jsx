import { useState, useEffect } from 'react'; 
import './Navbar.scss';
import '../../app.scss';
import *as Unicons from '@iconscout/react-unicons';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleClick = () => {
      const navMenu = document.getElementById('nav-menu');
      setIsMenuOpen(!isMenuOpen);
  
      if (isMenuOpen) {
        navMenu.classList.remove('show-menu');
      } else {
        navMenu.classList.add('show-menu');
      }
    };
  
    const handleCloseClick = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
      setIsMenuOpen(false);
    };
  
    const handleNavLinkClick = () => {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.remove('show-menu');
      setIsMenuOpen(false);
    };

    const handleDocumentClick = (e) => {
        // Se valida que el clic ocurra fuera o dentro del menú
        if (!e.target.closest('#nav-menu') && !e.target.closest('#nav-toggle')) {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.remove('show-menu');
            setIsMenuOpen(false);
        }
    };
  
    useEffect(() => {
      const navLink = document.querySelectorAll('.nav_link');
      navLink.forEach((n) => n.addEventListener('click', handleNavLinkClick));

      document.addEventListener('click', handleDocumentClick);
  
      return () => {
        // Limpiar los event listeners al desmontar el componente
        navLink.forEach((n) => n.removeEventListener('click', handleNavLinkClick));
        document.removeEventListener('click, handleDocumentClick');
      };
    }, []);
  
    
    return(
        <header className="header" id="header">
        <nav className={`nav container ${isMenuOpen ? 'menu-open' : ''}`}>
          <a href="#" className="nav_logo">
            <SEYER DEV/></a>

                <div className="nav_menu"  id="nav-menu">
                    <ul className="nav_list grid">

                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <Unicons.UilEstate nav_icon/>
                                Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <Unicons.UilUser  nav_icon/>
                                About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <Unicons.UilCodeBranch nav_icon/>
                                Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <Unicons.UilConstructor nav_icon/>
                                Services
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#porfolio" className="nav_link">
                                <Unicons.UilFileCheck nav_icon/>
                                Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <Unicons.UilFastMail nav_icon/>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className="nav_close" id="nav-close" onClick={handleCloseClick}>
                        <Unicons.UilTimes/>
                    </i>
                </div>

                <div className="nav-btns">
                    <div className="nav_toggle" id="nav-toggle" onClick={handleToggleClick}>
                        <i><Unicons.UilApps /></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
