import './Skills.scss';
import '../../app.scss';
import * as Unicons from '@iconscout/react-unicons';

const Skill = () =>{
    return(
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills.</h2>
            <span className="section_subtitle">Conoce mis habilidades.</span>

            <div className="skills_container container grid">
                <div>

                    {/*SKILLS DE FRONTEND */}
                   <div className="skills_content">
                    <div className="skills_header">
                        <i className="skills_icon"><Unicons.UilArrow /></i>
                        <div>
                            <h1 className="skills_title">Desarrollo Frontend.</h1>
                            <span className="skills_subtitle">2 años.</span>
                        </div>
                        <i className='skills_arrow'><Unicons.UilAngleDown /></i>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">HTML</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_html"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_css"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_js"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">React</h3>
                                <span className="skills_number">60%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_react"></span>
                            </div>
                        </div>
                    </div>
                   </div>

                    {/*SKILLS DE BACKEND */}
                   <div className="skills_content">
                    <div className="skills_header">
                        <i className="skills_icon"><Unicons.UilServerNetworkAlt  /></i>
                        <div>
                            <h1 className="skills_title">Desarrollo Backend.</h1>
                            <span className="skills_subtitle">2 años.</span>
                        </div>
                        <i className='skills_arrow'><Unicons.UilAngleDown /></i>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">C#</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_csharp"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">.NET Framework</h3>
                                <span className="skills_number">50%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_netfw"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">MySQL</h3>
                                <span className="skills_number">70%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_sql"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Visual Studio Code</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_react"></span>
                            </div>
                        </div>
                    </div>
                   </div>

                    {/*SKILLS DE SISTEMAS */}
                    <div className="skills_content">
                    <div className="skills_header">
                        <i className="skills_icon"><Unicons.UilCloudComputing  /></i>
                        <div>
                            <h1 className="skills_title">Sistemas Computacionales.</h1>
                            <span className="skills_subtitle">4 años.</span>
                        </div>
                        <i className='skills_arrow'><Unicons.UilAngleDown /></i>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Soporte Técnico.</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_tc"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Redes</h3>
                                <span className="skills_number">80%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_network"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_title">
                                <h3 className="skills_name">Informatica</h3>
                                <span className="skills_number">90%</span>
                            </div>
                            <div className="skills_bar">
                                <span className="skills_percertage skills_"></span>
                            </div>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;