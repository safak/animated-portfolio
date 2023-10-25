import {motion} from "framer-motion";

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.5, //bottom to up
            staggerDirection: -1, //up to bottom
        }
    }
}

const itemVariants = {
    open: {
        y: 0, 
        opacity:1,
    },
    closed: {
        y: 50,
        opacity:0,
    }
}

const Links = () => {
  const items = [
    "Homepage",
    "Services",
    "Portofolio",
    "Contact",
    "About",
  ]
    return (
    <motion.div variants={variants} className="links">
        {items.map((item) => (
            <motion.a 
            href={`#${item}`} 
            key={item} 
            whileHover={{scale:1.1}} 
            variants={itemVariants} 
            whileTap={{scale:0.95}}
            >
                {item}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links