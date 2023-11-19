import './Trayec.scss';
import '../../app.scss';
import * as Unicons from '@iconscout/react-unicons';

const Trayec = () => {

    const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qa_active')
            })
            target.classList.add('qa_active')

            tabs.forEach(tab =>{
                tab.classList.remove('qa_active')
            })
            tab.classList.add('qa_active')
        })
      })

    return(
        <section className="qa section">
            <h2 className="section_title">Trayectoria.</h2>
            <span className="section_subtitle">conoce mi trayectoria academica y laboral.</span>

            <div className="qa_container container">
                <div className="qa_tabs">
                    <div className="qa_button button--flex qa_active" data-target='#education'>
                        <i className="qa_icon"><Unicons.UilGraduationCap/></i>
                        Educación
                    </div>
                    <div className="qa_button button--flex" data-target='#work'>
                        <i className="qa_icon"><Unicons.UilProcessor/></i>
                        Exp. Laboral
                    </div>
                </div>

               
                <div className="qa_sections">
                    {/*CONTENEDOR DE EDUCACION*/}
                    <div className="qa_content qa_activa" data-content id='education'> 

                    {/*PRIMERA QA 1*/}
                        <div className="qa_data">
                            <div>
                                <h3 className="qa_title">Ing. en Comunicaciones y Electronica</h3>
                                <span className="qa_subtitle">ESIME Unidad Zacatenco | IPN</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    2021 - Presente (4to Semestre)
                                </div>
                            </div>

                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>
                        </div>

                    {/*PRIMERA QA 2*/}
                        <div className="qa_data">
                            <div></div>
                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>

                            <div>
                                <h3 className="qa_title">Técnico en Informática.</h3>
                                <span className="qa_subtitle">Colegio de Bachilleres.</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    Marzo 2021 - Junio 2021
                                </div>
                            </div>
                        </div>

                    {/*PRIMERA QA 3*/}
                        <div className="qa_data">
                            <div>
                                <h3 className="qa_title">Tenico en Sistemas Digitales</h3>
                                <span className="qa_subtitle">CECyT No.1 GONZALO Vazquez | IPN</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    2014 - 2019 (Trunco)
                                </div>
                            </div>

                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>
                        </div>

                    {/*PRIMERA QA 4*/}
                        <div className="qa_data">
                            <div></div>
                            
                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>

                            <div>
                                <h3 className="qa_title">Técnico en Electricidad</h3>
                                <span className="qa_subtitle">Secundaria Técnica No. 88</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    2011 - 2014
                                </div>
                            </div>
                        </div>

                    </div>

                    {/*CONTENEDOR DE TRABAJO*/}
                    <div className="qa_content" data-content id='work'> 
                        
                        {/*PRIMERA QA 1*/}
                        <div className="qa_data">
                            <div>
                                <h3 className="qa_title">Gerente de Sistemas.</h3>
                                <span className="qa_subtitle">Audio Acústica y Electrónica.</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    Noviembre 2021 - Presente.
                                </div>
                            </div>

                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>
                        </div>

                    {/*PRIMERA QA 2*/}
                        <div className="qa_data">
                            <div></div>
                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>

                            <div>
                                <h3 className="qa_title">Auxiliar en Sistemas.</h3>
                                <span className="qa_subtitle">Gonher Music Center.</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    Julio 2019 - Noviembre 2021
                                </div>
                            </div>
                        </div>

                    {/*PRIMERA QA 3*/}
                        <div className="qa_data">
                            <div>
                                <h3 className="qa_title">Auxiliar en Sistemas.</h3>
                                <span className="qa_subtitle">In2com  - ESDM Consulting.</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    Marzo 2018 - Agosto 2018
                                </div>
                            </div>

                            <div>
                                <span className="qa_rounder"></span>
                                <span className="qa_line"></span>
                            </div>
                        </div>

                    {/*PRIMERA QA 4*/}
                        <div className="qa_data">
                            <div></div>
                            
                            <div>
                                <span className="qa_rounder"></span>
                                {/*<span className="qa_line"></span>*/}
                            </div>

                            <div>
                                <h3 className="qa_title">Asesor de Ventas.</h3>
                                <span className="qa_subtitle">SUMITEL | Plaza de la Técnologia.</span>
                                <div className="qa_calendar">
                                    <i><Unicons.UilCalendarAlt /></i>
                                    Enero 2018 - Marzo 2018
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trayec;