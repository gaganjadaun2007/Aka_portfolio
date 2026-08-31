import { motion } from 'framer-motion';
import { Terminal, Wrench, Zap } from 'lucide-react';

export function HowIWork() {
  const steps = [
    {
      title: 'BUILD',
      description: 'Turn ideas into working software.',
      icon: <Terminal size={32} />
    },
    {
      title: 'DEBUG',
      description: 'Understand why things break.',
      icon: <Wrench size={32} />
    },
    {
      title: 'IMPROVE',
      description: 'Refactor, learn and build better.',
      icon: <Zap size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="section-container">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            className="group relative p-10 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl overflow-hidden cursor-default transition-colors hover:border-[var(--text-primary)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-secondary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            <div className="relative z-10">
              <div className="mb-8 text-[var(--text-secondary)] group-hover:text-[var(--color-accent)] transform group-hover:-translate-y-1 transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] mb-3 relative inline-block group-hover:translate-x-1 transition-transform duration-300">
                {step.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-300" />
              </h3>
              <p className="text-[var(--text-secondary)] mt-4">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
