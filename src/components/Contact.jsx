import { user } from '../data/content';
import { Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useScrollSpread } from '../hooks/useScrollInteraction';

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ContactCard = ({ card, index }) => {
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Left card (index 0) moves from right to left (spreads out left)
  // Center card (index 1) just scales up slightly
  // Right card (index 2) moves from left to right (spreads out right)
  const xDir = index === 0 ? 30 : index === 2 ? -30 : 0;
  const scaleOutput = index === 1 ? [0.95, 1, 0.95] : [1, 1, 1];

  const { x, scale, opacity } = useScrollSpread(cardRef, {
    offset: ["start 95%", "center center"],
    inputRange: [0, 1, 1],
    xOutput: [xDir, 0, 0],
    scaleOutput: [scaleOutput[0], scaleOutput[1], scaleOutput[1]],
    opacityOutput: [0, 1, 1]
  });

  return (
    <motion.a 
      ref={cardRef}
      style={prefersReducedMotion ? {} : { x, scale, opacity }}
      href={card.link}
      target="_blank"
      rel="noreferrer"
      className="group p-10 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl flex flex-col items-center text-center hover:border-[var(--text-primary)] hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-6 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
        {card.icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)] relative">
        {card.name}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--text-primary)] group-hover:w-full transition-all duration-300" />
      </h3>
      <p className="text-sm text-[var(--text-secondary)]">{card.label}</p>
    </motion.a>
  );
};

export function Contact() {
  const cards = [
    { name: 'Email', icon: <Mail size={24} />, link: `mailto:${user.email}`, label: 'Send an email' },
    { name: 'GitHub', icon: <GithubIcon />, link: user.github, label: 'View repositories' },
    { name: 'LinkedIn', icon: <LinkedinIcon />, link: user.linkedin, label: 'Connect professionally' },
  ];

  const containerRef = useRef(null);

  const { y: headerY, opacity: headerOpacity } = useScrollSpread(containerRef, {
    offset: ["start end", "end start"],
    inputRange: [0, 0.2, 1],
    yOutput: [30, 0, -30],
    opacityOutput: [0, 1, 0.5]
  });

  return (
    <section ref={containerRef} className="section-container" id="contact">
      <motion.div style={{ y: headerY, opacity: headerOpacity }} className="text-center mb-16">
        <div className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6">
          05 — CONTACT
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Let's connect.
        </h2>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          I'm open to internships, technical collaborations and opportunities to learn through real-world engineering.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <ContactCard key={index} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}
