import './About.scss';
import '../../app.scss';
import * as Unicons from '@iconscout/react-unicons';
import ab1 from  '../../assets/img/About/dev2.gif';
import CVSergioPDF from './CVSergio.pdf';

const About = () => {
    return(
        <section className="about section" id='about'>
            <h2 className="section_title">About Me.</h2>
            <span className="section_subtitle">My introduction.</span>

            <div className="about_container container grid">
                <img src={ab1} alt="" className='about_img' />

                <div className="about_data">
                    <p className="about_description">
                        Tecnico en informática y estudiante de Ing.CyE, con experiencia en el área de sistemas computacionales,
                        desarrollando proyectos en redes, software y aplicaciones web.
                    </p>

                    <div className="about_info">
                        <div>
                            <span className="about_info-title">+04 </span>
                            <span className="about_info-name">Años<br/> experiencia.</span>
                        </div>
                        <div>
                            <span className="about_info-title">+10 </span>
                            <span className="about_info-name">Proyectos<br/> completados.</span>
                        </div>
                        <div>
                            <span className="about_info-title">+05 </span>
                            <span className="about_info-name">Compañias<br/> aliadas</span>
                        </div>
                    </div>
                                            
                    <div className="about_buttons">
                        <a download href={CVSergioPDF} className="button button--flex">
                            Download CV <i className='button_icon'><Unicons.UilDownloadAlt/></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default About;