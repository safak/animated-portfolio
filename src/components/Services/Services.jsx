import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Database, Cpu, Phone } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web development with modern technologies",
    features: [
      "Custom web applications",
      "Responsive design",
      "Performance optimization",
      "SEO-friendly development",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces using Figma",
    features: [
      "User-centered design",
      "Interactive prototypes",
      "Design systems",
      "Accessibility compliance",
    ],
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    features: [
      "React applications",
      "Modern CSS frameworks",
      "Animation and interactions",
      "Cross-browser compatibility",
    ],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust and scalable server-side solutions",
    features: [
      "API development",
      "Database design",
      "Authentication systems",
      "Server optimization",
    ],
  },
  // {
  //   icon: Cpu,
  //   title: "AI/ML Integration",
  //   description: "Incorporating AI capabilities into applications",
  //   features: [
  //     "Machine learning models",
  //     "AI-powered features",
  //     "Data analysis",
  //     "Automated systems",
  //   ],
  // },
  // {
  //   icon: Phone,
  //   title: "Mobile Development",
  //   description: "Cross-platform mobile application development",
  //   features: [
  //     "React Native apps",
  //     "Native functionality",
  //     "App store deployment",
  //     "Mobile-first design",
  //   ],
  // },
];

export const Services = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 border-t-violet-950 py-16 px-4">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            Delivering high-quality solutions across various domains of software development
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};
