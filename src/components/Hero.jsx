import { user } from '../data/content';
import { Mail, Code2, Terminal, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AbstractVisual = () => (
  <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center pointer-events-none">
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-violet-500/20 rounded-full blur-3xl opacity-60"></div>
    
    {/* Main Code Window */}
    <div className="relative w-full max-w-sm bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-2xl overflow-hidden animate-float theme-transition">
      {/* Window Header */}
      <div className="h-8 bg-[var(--bg-secondary)] border-b border-[var(--border-color)] flex items-center px-4 gap-1.5 theme-transition">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
      </div>
      {/* Code Content */}
      <div className="p-6 font-mono text-sm leading-relaxed text-[var(--text-primary)] bg-[var(--bg-primary)]/50 backdrop-blur-sm theme-transition">
        <p><span className="text-violet-500">const</span> <span className="text-blue-500">developer</span> = {'{'}</p>
        <p className="pl-4"><span className="text-[var(--text-secondary)]">name:</span> <span className="text-green-500">"{user.name}"</span>,</p>
        <p className="pl-4"><span className="text-[var(--text-secondary)]">focus:</span> [<span className="text-green-500">"AI/ML"</span>, <span className="text-green-500">"Software"</span>],</p>
        <p className="pl-4"><span className="text-[var(--text-secondary)]">building:</span> <span className="text-violet-500">true</span></p>
        <p>{'};'}</p>
      </div>
    </div>

    {/* Floating Elements */}
    <div className="absolute top-10 -left-6 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[var(--text-primary)] animate-float-delayed theme-transition">
      Python
    </div>
    <div className="absolute -bottom-4 right-10 bg-[var(--card-bg)] border border-[var(--border-color)] px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[var(--color-accent)] animate-float-fast theme-transition">
      JavaScript
    </div>
    <div className="absolute top-1/2 -right-12 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-lg shadow-lg text-sm font-bold text-[var(--color-accent)] animate-float theme-transition">
      AI / ML
    </div>
  </div>
);

const GithubIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="section-container relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8"
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-semibold tracking-wide text-[var(--color-accent)] uppercase">
            {user.degree}
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] mb-2">
            {user.headline}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 gradient-text">
            {user.subline}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
            {user.bio}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
            <a href="#work" className="btn-primary w-full sm:w-auto group">
              View My Work
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href={user.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full sm:w-auto">
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-[var(--text-secondary)]">
            <a href={user.github} target="_blank" rel="noreferrer" className="hover:text-[var(--text-primary)] transition-colors hover:scale-110 active:scale-95" title="GitHub">
              <span className="sr-only">GitHub</span>
              <GithubIcon />
            </a>
            <a href={user.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-colors hover:scale-110 active:scale-95" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon />
            </a>
            <a href={`mailto:${user.email}`} className="hover:text-[var(--text-primary)] transition-colors hover:scale-110 active:scale-95" title="Email">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
            <a href={user.leetcode} target="_blank" rel="noreferrer" className="hover:text-[#FFA116] transition-colors hover:scale-110 active:scale-95" title="LeetCode">
              <span className="sr-only">LeetCode</span>
              <Code2 size={20} />
            </a>
            <a href={user.hackerrank} target="_blank" rel="noreferrer" className="hover:text-[#2EC866] transition-colors hover:scale-110 active:scale-95" title="HackerRank">
              <span className="sr-only">HackerRank</span>
              <Terminal size={20} />
            </a>
            <a href={user.hackerearth} target="_blank" rel="noreferrer" className="hover:text-[#323754] transition-colors hover:scale-110 active:scale-95" title="HackerEarth">
              <span className="sr-only">HackerEarth</span>
              <Globe size={20} />
            </a>
            <a href={user.geeksforgeeks} target="_blank" rel="noreferrer" className="hover:text-[#2F8D46] transition-colors hover:scale-110 active:scale-95" title="GeeksforGeeks">
              <span className="sr-only">GeeksforGeeks</span>
              <BookOpen size={20} />
            </a>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div variants={itemVariants} className="flex-1 w-full">
          <AbstractVisual />
        </motion.div>
      </motion.div>
    </section>
  );
}
