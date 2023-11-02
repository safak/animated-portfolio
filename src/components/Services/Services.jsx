import './services.scss';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, {margin:'-100px'});
  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // whileInView='animate'
      ref={ref}
      animate={isInView && 'animate'}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
        <div className='title'>
          <img src='/people.webp' alt='' />
          <h1>
            <span>
              <b>Unique</b>
            </span>{' '}
            Ideas
          </h1>
        </div>
        <div className='title'>
          <h1>
            <span>
              <b>For Your</b>
            </span>{' '}
            Business
          </h1>
          <button className='btn'>WHAT WE DO</button>
        </div>
      </motion.div>
      <motion.div className='listContainer' variants={variants}>
        <motion.div className='box'>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            harum, neque omnis ad reiciendis saepe eius dolorum deleniti, maxime
            cum suscipit dolor, nam expedita vero repellat molestiae deserunt
            repudiandae placeat.
          </p>
          <button className='card-btn'>GO</button>
        </motion.div>
        <motion.div className='box'>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            harum, neque omnis ad reiciendis saepe eius dolorum deleniti, maxime
            cum suscipit dolor, nam expedita vero repellat molestiae deserunt
            repudiandae placeat.
          </p>
          <button className='card-btn'>GO</button>
        </motion.div>
        <motion.div className='box'>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            harum, neque omnis ad reiciendis saepe eius dolorum deleniti, maxime
            cum suscipit dolor, nam expedita vero repellat molestiae deserunt
            repudiandae placeat.
          </p>
          <button className='card-btn'>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
