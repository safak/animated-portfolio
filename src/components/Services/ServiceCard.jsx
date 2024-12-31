import React from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/[0.15] transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-indigo-300" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-indigo-200 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-indigo-100 text-sm flex items-start gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
