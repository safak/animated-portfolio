import { motion } from 'framer-motion';
import './navbar.scss';
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />

      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Steve Crabtree
        </motion.span>

        <div className='social'>
          <a href='#'>
            <img src='/facebook.png' alt='facebook-link'></img>
          </a>
          <a href='#'>
            <img src='/instagram.png' alt='instagram-link'></img>
          </a>
          <a href='#'>
            <img src='/youtube.png' alt='youtube-link'></img>
          </a>
          <a href='#'>
            <img src='/dribbble.png' alt='dribbble-link'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
