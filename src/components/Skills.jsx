import { stack } from '../data/content';
import { motion, useTransform, useSpring, useScroll, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useScrollSpread, useIsMobile } from '../hooks/useScrollInteraction';

// Individual skill pill that reads from the shared progress
const SkillPill = ({ tech, index, progress }) => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  // Calculate spread amount based on index (simulating a delay/stagger spread)
  // Higher index = spreads further from center
  const spreadAmount = isMobile ? (index % 4) * 2 : (index % 4) * 10;
  
  // Map progress [0 (bottom of screen), 0.5 (center)] to spread
  const x = useTransform(progress, [0, 0.5], [spreadAmount, 0]);
  const y = useTransform(progress, [0, 0.5], [spreadAmount, 0]);
  const opacity = useTransform(progress, [0, 0.3], [0, 1]);

  return (
    <motion.span 
      style={prefersReducedMotion ? {} : { x, y, opacity }}
      className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full font-medium text-[var(--text-primary)] hover:-translate-y-[2px] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-default shadow-sm hover:shadow-md"
    >
      {tech}
    </motion.span>
  );
};

export function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"]
  });
  
  // Smooth the raw scroll for the pills
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  const { y: headerY, opacity: headerOpacity } = useScrollSpread(containerRef, {
    offset: ["start end", "end start"],
    inputRange: [0, 0.3, 1],
    yOutput: [20, 0, -20],
    opacityOutput: [0, 1, 0.5]
  });

  return (
    <section ref={containerRef} className="section-container" id="skills">
      <motion.div style={{ y: headerY, opacity: headerOpacity }}>
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
              <div className="flex flex-wrap gap-3 text-sm">
                {group.technologies.map((tech, techIndex) => (
                  <SkillPill 
                    key={techIndex} 
                    tech={tech} 
                    index={techIndex} 
                    progress={smoothProgress} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
