import './services.scss';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div className='services'>
      <motion.div className='textContainer'>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer'>
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
      <motion.div className='listContainer'>
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
        <motion.div className='box' >
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
