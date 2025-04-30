import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { SiFigma, SiFramer } from "react-icons/si";
import "./Bio.scss";

const Bio = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const fade = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bio-modern" ref={ref}>
      <motion.div
        className="bio-container"
        variants={fade}
        initial="initial"
        animate={isInView ? "animate" : ""}
      >
        <div className="bio-photo">
          <img src="/Img/fotoBio.png" alt="Adriano" />
          <div className="bio-tag">🎯 Freelancer & UI Dev</div>
          <h2>Adriano de Oliveira</h2>
          <span>@adrianowebdeveloperux</span>
        </div>

        <div className="bio-text">
          <button className="bio-btn">
            <FaUser />
            Quem sou eu?
          </button>
          <h1>Prazer, sou Adriano!</h1>
          <p>
            Atuo há mais de 2 anos como Desenvolvedor Front-end, focado em criar experiências digitais elegantes e intuitivas.
          </p>
          <p>
            Sou especialista em interfaces com React e apaixonado por UI/UX. Transformo ideias em produtos funcionais que realmente entregam valor.
          </p>

          <div className="bio-icons">
            <SiFigma size={28} />
            <SiFramer size={28} />
          </div>

          <div className="bio-extra">
            <p>
              Trabalho com ferramentas de alta performance como Figma e Framer, sempre buscando o melhor desempenho e usabilidade.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Bio;
