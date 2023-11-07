import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce app',
    img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
  {
    id: 2,
    title: 'Next.JS app',
    img: 'https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
  {
    id: 3,
    title: 'Vanilla JavaScript app',
    img: 'https://plus.unsplash.com/premium_photo-1661412605204-504ec6726508?auto=format&fit=crop&q=80&w=1332&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
  {
    id: 4,
    title: 'Vanilla JavaScript app',
    img: 'https://images.unsplash.com/photo-1552255349-450c59a5ec8e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam! Cumque aut ipsum incidunt libero, blanditiis, enim velit tempore reiciendis numquam vel cupiditate. Possimus alias, iste in recusandae ullam aliquam.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className='container'>
        <div className='wrapper'>
          <div className='imageContainer' ref={ref}>
            <img src={item.img} alt='' />
          </div>
          <motion.div className='textContainer' style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portfolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
