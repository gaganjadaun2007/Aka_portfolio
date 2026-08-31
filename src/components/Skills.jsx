import { stack } from '../data/content';
import { motion } from 'framer-motion';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const pillVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="section-container" id="skills">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6">
          02 — TOOLKIT
        </div>
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
            Technologies I work with.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {stack.map((group, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h3 className="text-sm font-bold tracking-widest text-[var(--text-secondary)] uppercase border-b border-[var(--border-color)] pb-2 mb-2">
                {group.category}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3 text-sm"
              >
                {group.technologies.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    variants={pillVariants}
                    className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full font-medium text-[var(--text-primary)] hover:-translate-y-[2px] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
