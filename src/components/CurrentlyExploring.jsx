import { exploring } from '../data/content';
import { motion } from 'framer-motion';

export function CurrentlyLearning() {
  // Duplicate array to create seamless loop
  const duplicatedExploring = [...exploring, ...exploring, ...exploring];

  return (
    <section className="py-20 md:py-32 overflow-hidden border-y border-[var(--border-color)] bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">Currently Exploring</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 md:gap-24 px-6 md:px-12 group-hover:[animation-play-state:paused]"
        >
          {duplicatedExploring.map((topic, index) => (
            <div key={index} className="flex items-center gap-6">
              <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text" style={{ WebkitTextStroke: '1px var(--text-secondary)' }}>
                {topic}
              </span>
              <span className="w-3 h-3 md:w-4 md:h-4 bg-[var(--color-accent)] rounded-full hidden sm:block"></span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
