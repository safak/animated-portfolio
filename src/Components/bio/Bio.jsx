import { useState } from "react";
import './Bio.scss';
import { motion } from "framer-motion";

const Bio = () => {
    const [frameAtivo, setFrameAtivo] = useState(1);

    const textFrame = (frame) => {
        setFrameAtivo(frame);
    };

    return (
        <div className="bio">
            <div className="slidingText">About</div>

            <div className="wrapper">

                <motion.div className="imagemContainer">
                    <img src="/Perfil com fundo.png" alt="" />
                    <div className="moldura"></div>
                </motion.div>

                <div className="informationContainer">
                    <div className="button-container">
                        <button className="button" onClick={() => textFrame(1)}>Bio</button>
                        <button className="button" onClick={() => textFrame(2)}>Graduação</button>
                        <button className="button" onClick={() => textFrame(3)}>Experiencia</button>
                    </div>
                    <div className="app">

                        {frameAtivo === 1 && (<div className="frame">
                            <p><b>Oi, tudo bem? Eu sou o Adriano, Desenvolvedor Front-end!</b><br />
                                Sou apaixonado por criar experiências digitais que sejam não apenas bonitas, mas também funcionais e intuitivas.
                                Com mais de X anos de experiência em desenvolvimento Front-end, trabalho com tecnologias como HTML, CSS, JavaScript, React e Vue.js para construir interfaces que encantam os usuários.
                                Estou sempre em busca de aprimorar minhas habilidades e acompanhar as últimas tendências da web. Meu objetivo é transformar ideias em soluções que realmente se destacam no ambiente digital.
                                Quando não estou codificando, estou explorando novas tecnologias, participando de comunidades de desenvolvimento e aprendendo sobre design UX/UI. Vamos construir algo incrível juntos!
                            </p></div>)}

                        {frameAtivo === 2 && (<div className="frame">
                            <p><b>Bacharelado em Análise e Desenvolvimento de Sistemas | Universidade UNINTER</b><br />
                                Graduação realizada em 2,5 anos, no formato EAD, com foco em soluções tecnológicas inovadoras.
                                Local: Volta Redonda, RJ.
                            </p></div>)}
                        {frameAtivo === 3 && (<div className="frame">
                            <p><b>Freelancer | Desenvolvedor Front-end</b><br />
                                Com vasta experiência como freelancer, venho ajudando empresas e indivíduos a transformar suas ideias em soluções digitais reais.
                                Ao longo de minha trajetória, trabalhei em projetos variados, desde sites e lojas virtuais até plataformas interativas, utilizando tecnologias como HTML, CSS, JavaScript, React e Vue.js.
                                Meu objetivo é entregar sempre um produto que combine usabilidade, performance e design de qualidade, respeitando o cronograma e as necessidades do cliente.
                                Cada projeto é uma oportunidade de aprender e crescer, e me orgulho de contribuir com meu trabalho para o sucesso dos meus parceiros.
                            </p></div>)}

                        <div className="info-container">
                            <div className="info-column">
                                <p><strong> Idade:</strong> 21</p>
                                <p><strong> Nacionalidade:</strong> Brasil</p>
                                <p><strong> Freelance:</strong> Disponível</p>
                            </div>
                            <div className="info-column">
                                <p><strong> Endereço:</strong> Volta Redonda, RJ</p>
                                <p><strong> Telefone:</strong> +55-024988518122</p>
                                <p><strong> Email:</strong> adrianowebdeveloperux@gmail.com</p>
                            </div>
                        </div>

                        <div className="action-button">
                            <button className="contato">Me contate</button>
                            <button className="contratar">Contratar Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bio;