import { useRef,useEffect } from "react";
import './Home.scss';
import '../../app.scss';
import * as Unicons from '@iconscout/react-unicons';
import bg1 from  '../../assets/img/Home/bg4.gif';
import Typed from 'typed.js';

const Home = () => {

    /* eslint-disable no-unused-vars */
    const devsa = useRef(null);

    useEffect(() => {
      const typed = new Typed(devsa.current, {
        strings: ['IDEAS', 'SUEÑOS', 'PROYECTOS'],
        fadeOutDelay: 1000,
        typeSpeed: 80,
        backSpeed: 80,
        showCursor: true,
        fadeOut: false,
        loop: false,
      });
  
      return () => {
        // Limpiar el Typed cuando el componente se desmonta
        typed.destroy();
      };
    }, []);
/* eslint-enable no-unused-vars */




    return(
        <section className="home section" id='home'>
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.linkedin.com/in/sergio-uriel-reyes-tirro-5b638021b/" target='blank' className="home_social-icon">
                            <i><Unicons.UilLinkedinAlt/></i>
                        </a>

                        <a href="https://github.com/stirro/" target='blank' className="home_social-icon">
                            <i><Unicons.UilGithub/></i>
                        </a>

                        <a href="https://black-mud-0eec09910.4.azurestaticapps.net/" target='blank' className="home_social-icon">
                            <i><Unicons.UilDribbble/></i>
                        </a>
                    </div>
                    <div className="home_img">
                        <img className='home_blob' src={bg1} alt="" />
                    </div>
                    <div className="home_data">
                        <h1 className="home_title">{'DEVSARROLLANDO>'}<br/><span className="wrap" ref={devsa}></span></h1>
                        <p>Hola Soy Sergio Tirro!, tengo 24 años, soy Técnico en informática y estudio la carrera de 
                        Ing. en Comunicaciones y Electrónica en el IPN. Con más de 4 años de experiencia en el área de sistemas computacionales tengo habilidades
                        para el desarrollo de soluciones, desarrollo de proyectos, liderazgo, paciencia y amor por mi profesión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;