import { useRef } from 'react';
import { motion, useInView } from 'framer-motion'
import './services.scss'

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  }
}
const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      className='services'
      variants={variants}
      initial='initial'
      // animate='animate'
      // whileInView='animate'
      ref={ref}
      // animate={isInView && 'animate'}
      animate={'animate'}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and more forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Modi, accusamus! Molestiae consequatur fuga doloribus id quaerat, tenetur corrupti aut modi nobis!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Modi, accusamus! Molestiae consequatur fuga doloribus id quaerat, tenetur corrupti aut modi nobis!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Modi, accusamus! Molestiae consequatur fuga doloribus id quaerat, tenetur corrupti aut modi nobis!</p>
          <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: 'lightgray', color: 'black' }}>
          <h2>Branding</h2>
          <p>Modi, accusamus! Molestiae consequatur fuga doloribus id quaerat, tenetur corrupti aut modi nobis!</p>
          <button>Go</button>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default Services;