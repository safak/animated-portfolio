import React from "react";
import styles from "./services.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Services = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="HTML" />
        <SkillList src={checkMarkIconDark} skill="CSS" />
        <SkillList src={checkMarkIconDark} skill="JavaScript" />
        <SkillList src={checkMarkIconDark} skill="React" />
        <SkillList src={checkMarkIconDark} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="Tailwind CSS" />
        <SkillList src={checkMarkIconDark} skill="Redux" />
        <SkillList src={checkMarkIconDark} skill="Git" />
        <SkillList src={checkMarkIconDark} skill="Bootstrap" />
        <SkillList src={checkMarkIconDark} skill="C++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIconDark} skill="MySQL" />
        <SkillList src={checkMarkIconDark} skill="MongoDB" />
        <SkillList src={checkMarkIconDark} skill="ExpressJS" />
      </div>
      <div className={styles.container}>
        <h1 className="sectionTitle">Experience</h1>

        <p className={styles.lead}>
          I have worked in <b>PROJECT PAYABLES LIMITED</b> company as a frontend
          developer intern from Sept 2023 to Dec 2023. During my internship I
          designed and implemented a responsive company website using modern web
          technologies, collaborating effectively with the team to meet project
          timelines.
        </p>
      </div>
    </section>
  );
};

export default Services;
