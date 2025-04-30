import "./services.scss"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },

    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }

    },
}

const Services = () => {
    
    const ref = useRef ();
    const isInView = useInView(ref,{margin:"-100px"})
    
    return (
        <motion.div className="Services" variants={variants} initial="initial" ref={ref} animate={isInView ? "animate" : ""} whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>Transformando Ideias em <br /> Projetos Incríveis!</p>
                <hr />
            </motion.div>

            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/codigo.webp" alt="Service Image" />
                    <h1>
                        <motion.b whileHover={{ color: "#00FFFF" }}>Design</motion.b> Sofisticados 
                    </h1>
                </div>

                <div className="title">
                    <h1>
                        e <motion.b whileHover={{ color: "#00FFFF" }}>Funcionais</motion.b> Para O Seu Site
                        </h1>
                    <button>O que nós fazemos</button>
                </div>


            </motion.div>

            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Transformo ideias em identidades memoráveis. Com o poder do branding, elevo marcas ao próximo nível!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                    <h2>Design</h2>
                    <p>Transformo criatividade em design impactante, dando vida a ideias e criando experiências visuais únicas!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                    <h2>Desenvolvimento</h2>
                    <p>Desenvolvo soluções digitais inovadoras, transformando ideias em experiências funcionais e eficientes!</p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "Lightgray", color: "black" }}>
                    <h2>Teste</h2>
                    <p>Garanto qualidade e performance, testando cada detalhe para entregar experiências digitais impecáveis!</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services;