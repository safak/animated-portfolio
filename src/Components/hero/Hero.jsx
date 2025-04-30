import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    buttonHover: {
        scale: 1.1,
        transition: {
            duration: 0.3,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const imageVariants = {
    initial: {
        y: 0,
        opacity: 1,
    },
    animate: {
        y: "100%",
        opacity: 0,
        transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
        },
    },
};

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Adriano Oliveira</motion.h2>
                    <motion.h1 variants={textVariants}>Software Developer and UX/UI Designer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants} whileHover="buttonHover" onClick={() => scrollToSection("Portifólio")}>Veja meus ultimos trabalhos</motion.button>
                        <motion.button variants={textVariants} whileHover="buttonHover" onClick={() => scrollToSection("Contato")}>Entrar em Contato</motion.button>
                    </motion.div>
                    <motion.img variants={imageVariants} src="Img/scroll.png" alt="" />
                </motion.div>
            </div>
            
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                Specialist In Creating Landing Pages Design
            </motion.div>

            <div className="imageContainer">
                <img src="Img/Perfil sem fundo.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;