import "./experience.scss"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils";
import { motion } from 'framer-motion';


const Experience = () => {
    return (
        <section>
            <div id="experience" className="experience">
                <div className="experience-title">
                    <h1>Experience and Skills</h1>
                </div>
                <div className="content">
                    <div className="skills">{
                        skills.map((skill, id) => {
                            return <div className="skill" key={id}>
                                <div className="skillImageContainer"><img src={getImageUrl(skill.imageSrc)} alt={skills.title} /></div>
                                <p>{skill.title}</p>
                            </div>
                        })
                    }</div>

                    <div className="history">
                        <div className="company">
                            <img src={getImageUrl(history[0].imageSrc)} alt={`${history[0].organisation} Logo`} className="company-logo" />
                            <h2 className="company-name">{history[0].organisation}</h2>
                        </div>
                        <ul className="timeline">
                            {history.map((item, index) => (
                                <motion.li key={index} className="timelineItem"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}>

                                    <div className="timelineContent">
                                        <h3>{`${item.role}`}, <span className="timePeriod">{`${item.startDate} - ${item.endDate}`}</span></h3>
                                        <ul>
                                            {item.experiences.map((experience, expIndex) => (
                                                <li key={expIndex}>{experience}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div >
            </div >
        </section>
    );
};

export default Experience
