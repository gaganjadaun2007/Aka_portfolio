import { journey } from '../data/content';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollSpread } from '../hooks/useScrollInteraction';

const JourneyNode = ({ item }) => {
  const nodeRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { x, scale, opacity } = useScrollSpread(nodeRef, {
    offset: ["start 90%", "center center"],
    inputRange: [0, 1, 1],
    xOutput: [-10, 0, 0],
    scaleOutput: [0.8, 1, 1],
    opacityOutput: [0.3, 1, 1]
  });

  return (
    <motion.div 
      ref={nodeRef}
      style={prefersReducedMotion ? {} : { x, scale, opacity }}
      className="relative pl-10 md:pl-16 group"
    >
      {/* Node Point */}
      <div className="absolute -left-[5px] top-2 h-3 w-3 rounded-full bg-[var(--bg-primary)] border-[3px] border-[var(--color-accent)] group-hover:scale-150 transition-transform duration-300 z-10" />
      
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold text-[var(--color-accent)]">
          {item.date}
        </span>
        <h3 className="text-xl md:text-2xl font-medium text-[var(--text-primary)]">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
};

export function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const { y: headerY, opacity: headerOpacity } = useScrollSpread(containerRef, {
    offset: ["start end", "end start"],
    inputRange: [0, 0.2, 1],
    yOutput: [30, 0, -30],
    opacityOutput: [0, 1, 0.5]
  });

  return (
    <section className="section-container" id="journey">
      <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-16">
        <div className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6">
          04 — JOURNEY
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Learning by doing.
        </h2>
      </motion.div>

      <div className="relative max-w-3xl ml-4 md:ml-8" ref={containerRef}>
        {/* Animated Line */}
        <motion.div 
          className="absolute left-0 top-2 bottom-0 w-px bg-[var(--color-accent)] origin-top z-0"
          style={{ scaleY }}
        />
        {/* Faded Background Line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-[var(--border-color)] z-[-1]" />

        <div className="space-y-16 py-4">
          {journey.map((item, index) => (
            <JourneyNode key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
