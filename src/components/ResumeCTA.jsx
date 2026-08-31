import { user } from '../data/content';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export function ResumeCTA() {
  return (
    <section className="px-6 pb-20 md:pb-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center border-[3px] border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-2xl relative overflow-hidden theme-transition"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-[var(--color-accent)]/20 rounded-full blur-3xl pointer-events-none theme-transition"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-[var(--color-accent-secondary)]/20 rounded-full blur-3xl pointer-events-none theme-transition"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[var(--bg-primary)]">
            Let's build something meaningful.
          </h2>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-[var(--bg-primary)]/80">
            Explore my work, check out my resume or connect with me.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={user.resumeUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl text-[var(--text-primary)] bg-[var(--bg-primary)] hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto shadow-xl"
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
            <a 
              href={user.github} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-xl text-[var(--bg-primary)] border-2 border-[var(--bg-primary)] hover:bg-[var(--bg-primary)]/10 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <GithubIcon size={18} className="mr-2" />
              View GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
