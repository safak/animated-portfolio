import { motion } from 'framer-motion';

export function TimelineCard({ icon: Icon, title, subtitle, date, details, side }) {
  const isLeft = side === 'left';

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`flex gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center md:items-start group`}
    >
      {/* Timeline dot and line */}
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
          <Icon className="w-6 h-6 text-indigo-300" />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-indigo-500/20 to-transparent absolute top-12" />
      </div>

      {/* Content */}
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:w-[calc(100%-3rem)] hover:bg-white/[0.15] transition-colors"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-indigo-200">{subtitle}</p>
          </div>
          <span className="text-sm text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
            {date}
          </span>
        </div>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="text-indigo-100 text-sm flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
