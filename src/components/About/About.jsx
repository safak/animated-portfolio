import React, { useState } from "react";
import "./about.scss";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  Code,
  User2,
  GraduationCap,
  Heart,
} from "lucide-react";
import { TimelineCard } from "./TimelineComponent";

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 border-t-indigo-600 py-16 px-4">
      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto space-y-16">
        {/* Education */}
        <TimelineCard
          icon={GraduationCap}
          title="Integrated M.Sc in Computer Science"
          subtitle="Nehru Arts & Science College, Kanhangad"
          date="2022-2027"
          details={[
            "Specialisation in AI & ML",
            "Currently pursuing advanced studies in computer science",
            "Focus on artificial intelligence and machine learning applications",
          ]}
          side="left"
        />

        {/* Experience */}
        <TimelineCard
          icon={Briefcase}
          title="Software Developer Engineer Intern"
          subtitle="Hexmos Tech"
          date="April 2024 - November 2024"
          details={[
            "Built dynamic pricing page with React & TypeScript",
            "Contributed to 'Feedback by Hexmos' product development",
            "Developed Ansika tool for simplified onboarding",
            "Collaborated in team environments through MR reviews",
            "Gained end-to-end development experience from planning to deployment",
          ]}
          side="right"
        />
      </div>
    </div>
  );
};

export default About;
