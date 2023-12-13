import {useRef} from "react"
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

//creating an array of items

const items = [
    {
        id:1,
        title:"Monalisa-Art",
        img:"https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"monalisa paintingLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio amet repellat perferendis dolorem omnis quidem voluptate ipsam ab nobis quas architecto, cupiditate aliquid repellendus quam sunt ad voluptatibus beatae!"
        
    },

    {
        id:2,
        title:"Italian-Art",
        img:"https://images.pexels.com/photos/19341850/pexels-photo-19341850/free-photo-of-painting-on-wall.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"monalisa paintingLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio amet repellat perferendis dolorem omnis quidem voluptate ipsam ab nobis quas architecto, cupiditate aliquid repellendus quam sunt ad voluptatibus beatae!"
        
    },

    {
        id:3,
        title:"Arabian-Art",
        img:"https://images.pexels.com/photos/19341859/pexels-photo-19341859/free-photo-of-statue-of-virgin-mary-with-dagger-in-heart.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"monalisa paintingLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio amet repellat perferendis dolorem omnis quidem voluptate ipsam ab nobis quas architecto, cupiditate aliquid repellendus quam sunt ad voluptatibus beatae!"
        
    },

    {
        id:4,
        title:"Europe-Art",
        img:"https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"monalisa paintingLorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odio amet repellat perferendis dolorem omnis quidem voluptate ipsam ab nobis quas architecto, cupiditate aliquid repellendus quam sunt ad voluptatibus beatae!"
        
    }
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = 
    useScroll({
        target:ref,
        // offset:["start start", "end start"]
        
    });

    const y = useTransform(scrollYProgress, [0,1], [-100, 100])
    return (
        <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                 <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer"
            style={{y}}
            >
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

    const {scrollYProgress} = 
    useScroll({target:ref, offset:["end end", "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
      {items.map((item) =>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
