import { about } from '../data/content';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollSpread } from '../hooks/useScrollInteraction';

const RotatingGrid = () => (
  <div className="relative w-full max-w-sm mx-auto aspect-square rounded-full border border-[var(--border-color)] overflow-hidden hidden md:flex items-center justify-center opacity-70">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-[0.5px] border-[var(--border-color)] border-dashed rounded-full"
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-8 border-[0.5px] border-[var(--border-color)] border-dashed rounded-full"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-xs font-mono tracking-widest text-[var(--text-secondary)]">
      <span className="bg-[var(--bg-primary)] px-2">BUILD</span>
      <span className="bg-[var(--bg-primary)] px-2">LEARN</span>
      <span className="bg-[var(--bg-primary)] px-2">DEBUG</span>
      <span className="bg-[var(--bg-primary)] px-2">IMPROVE</span>
    </div>
  </div>
);

export function About() {
  const containerRef = useRef(null);

  const { x: visualX, opacity: visualOpacity } = useScrollSpread(containerRef, {
    offset: ["start end", "end start"],
    inputRange: [0, 0.5, 1],
    xOutput: [20, 0, -30],
    opacityOutput: [0, 1, 0.5]
  });

  const { x: textX, opacity: textOpacity } = useScrollSpread(containerRef, {
    offset: ["start end", "end start"],
    inputRange: [0, 0.5, 1],
    xOutput: [-20, 0, 30],
    opacityOutput: [0, 1, 0.5]
  });

  return (
    <section ref={containerRef} className="section-container" id="about">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
        <motion.div style={{ x: visualX, opacity: visualOpacity }}>
          <div className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6 md:mb-10">
            01 — ABOUT
          </div>
          <RotatingGrid />
        </motion.div>
        <motion.div style={{ x: textX, opacity: textOpacity }}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-8 leading-tight">
            {about.heading}
          </h2>
          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>
          
          {/* Subtle decorative grid below text */}
          <div className="mt-12 w-full h-8 flex gap-1 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-transparent to-[var(--border-color)] h-full rounded-t-sm" style={{ opacity: 1 - (i * 0.05) }}></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
