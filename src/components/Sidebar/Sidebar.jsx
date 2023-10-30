import { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links/Links';
import ToggleButton from './ToggleButton/ToggleButton';
import './sidebar.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
      open: {
          clipPath: 'circle(1200px at 50px 50px)',
          trasitition: {
              type: "spring",
              stifness: 20,
          },
    },
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      trasitition: {
        delay: 0.5,
        type: 'spring',
        stifness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
