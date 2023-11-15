import './Navbar.scss';
import '../../app.scss';
import *as Unicons from '@iconscout/react-unicons';
import './Toggle.jsx';


const Navbar = () => {
    
    return(
        <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo">
            SEYER DEVS</a>

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
                    <i className="nav_close" id="nav-close">
                        <Unicons.UilTimes/>
                    </i>
                </div>

                <div className="nav-btns">
                    <div className="nav_toggle" id="nav-toggle">
                        <i><Unicons.UilApps /></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;