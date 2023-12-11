import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './portfolio.scss'

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
  },
  {
    id: 2,
    title: 'Vanilla JS App',
    img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
  },
  {
    id: 3,
    title: 'Music App',
    img: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
  },
  {
    id: 4,
    title: 'Next.js Blog',
    img: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
  },
];

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt='My project' />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}

    </div>
  );
};

export default Portfolio;

// import React, { useRef } from 'react';
// import { motion, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
// import './portfolio.scss';

// const items = [
//   {
//     id: 1,
//     title: 'React Commerce',
//     img: 'https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=600',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
//   },
//   {
//     id: 2,
//     title: 'Vanilla JS App',
//     img: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=800',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
//   },
//   {
//     id: 3,
//     title: 'Music App',
//     img: 'https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=800',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
//   },
//   {
//     id: 4,
//     title: 'Next.js Blog',
//     img: 'https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=800',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cupiditate suscipit similique, culpa aliquam fugiat aut vitae, autem necessitatibus enim vero eius animi aliquid vel delectus omnis nisi illum quas.'
//   },
// ];

// const Single = ({ item }) => {
//   const ref = useRef();

//   const { scrollYProgress } = useScroll({
//     target: ref,
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

//   return (
//     <section>
//       <div className="container">
//         <div className="wrapper">
//           <div className="imageContainer" ref={ref}>
//             <img src={item.img} alt='My project' />
//           </div>
//           <motion.div className="textContainer" style={{ y }}>
//             <h2>{item.title}</h2>
//             <p>{item.desc}</p>
//             <button>See Demo</button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Portfolio = () => {
//   const ref = useRef();
//   const { ref: inViewRef, inView } = useInView({ triggerOnce: true });

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['end end', 'start start'],
//   });

//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   return (
//     <div className="portfolio" ref={inViewRef}>
//       <div className="progress">
//         <h1>Featured Works</h1>
//         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//       </div>
//       {items.map(item => (
//         <Single item={item} key={item.id} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;
