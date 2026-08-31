import { useState } from 'react';
import { projects } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const ExternalLinkIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const CloseIcon = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Abstract Web Mockup for PrivLink
const WebMockup = () => (
  <div className="w-full h-full min-h-[300px] bg-[var(--card-bg)] rounded-t-xl border border-[var(--border-color)] border-b-0 shadow-2xl flex flex-col overflow-hidden theme-transition">
    <div className="h-8 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center px-4 gap-2">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
      </div>
      <div className="mx-auto w-1/2 h-4 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-md"></div>
    </div>
    <div className="flex-1 flex">
      {/* Sidebar */}
      <div className="w-1/4 h-full border-r border-[var(--border-color)] bg-[var(--bg-secondary)] p-4 space-y-3 hidden sm:block">
        <div className="w-full h-8 bg-[var(--color-accent)]/10 rounded-md"></div>
        <div className="w-3/4 h-3 bg-[var(--border-color)] rounded-sm"></div>
        <div className="w-1/2 h-3 bg-[var(--border-color)] rounded-sm"></div>
      </div>
      {/* Main Chat Area */}
      <div className="flex-1 p-6 flex flex-col justify-end gap-4">
        <div className="w-3/4 p-3 bg-[var(--bg-secondary)] rounded-2xl rounded-tl-sm self-start border border-[var(--border-color)]"></div>
        <div className="w-1/2 p-3 bg-[var(--color-accent)] text-white rounded-2xl rounded-tr-sm self-end"></div>
        <div className="w-2/3 p-3 bg-[var(--bg-secondary)] rounded-2xl rounded-tl-sm self-start border border-[var(--border-color)]"></div>
      </div>
    </div>
  </div>
);

// Abstract IoT Mockup for Smart GeoCell
const IoTMockup = () => (
  <div className="w-full h-full min-h-[300px] bg-slate-900 rounded-t-xl border border-slate-800 border-b-0 shadow-2xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
    <div className="relative z-10 w-full max-w-sm">
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-700 via-indigo-500 to-slate-700 mx-4 relative">
          <motion.div 
            animate={{ x: ["0%", "400%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.8)]"
          />
        </div>
        <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
          <div className="w-4 h-4 rounded-sm bg-indigo-500"></div>
        </div>
      </div>
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="w-1/3 h-2 bg-slate-600 rounded-full mb-6"></div>
        <div className="space-y-4">
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-indigo-500"></motion.div>
          </div>
          <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} whileInView={{ width: "40%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-emerald-500"></motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="section-container" id="work">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="text-xs font-bold tracking-widest text-[var(--text-secondary)] uppercase mb-6">
          03 — SELECTED WORK
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
          Things I've built.
        </h2>
      </motion.div>

      <div className="space-y-16 md:space-y-32">
        {projects.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`project-card group relative flex flex-col ${isFeatured ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center cursor-pointer`}
              onClick={() => handleProjectClick(project)}
            >
              {/* Text Content */}
              <div className="flex-1 w-full">
                <div className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4">
                  {project.category}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 transition-colors group-hover:text-[var(--color-accent)]">
                  {project.title}
                </h3>
                <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-semibold rounded-full text-[var(--text-primary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/5 to-[var(--color-accent-secondary)]/5 rounded-3xl transform -rotate-2 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.94, x: isFeatured ? 40 : -40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="relative w-full aspect-[4/3] bg-[var(--bg-secondary)] rounded-3xl border border-[var(--border-color)] overflow-hidden flex items-end justify-center px-8 pt-8 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02] transition-all duration-500"
                >
                  {isFeatured ? <WebMockup /> : <IoTMockup />}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-primary)]/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
              className="bg-[var(--card-bg)] border border-[var(--border-color)] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
            >
              <button 
                className="absolute top-6 right-6 p-2 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors z-10"
                onClick={closeProject}
              >
                <CloseIcon />
              </button>
              
              <div className="p-8 sm:p-16">
                <div className="text-sm font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4">
                  {activeProject.category}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-8">
                  {activeProject.title}
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <a href={activeProject.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    <GithubIcon className="mr-2" /> View Source
                  </a>
                  <a href={activeProject.demoUrl} target="_blank" rel="noreferrer" className="btn-primary">
                    Live Demo <ExternalLinkIcon className="ml-2" />
                  </a>
                </div>

                <div className="space-y-12 text-lg leading-relaxed text-[var(--text-secondary)]">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Overview</h3>
                    <p>{activeProject.details.overview}</p>
                  </div>
                  
                  {activeProject.features && (
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Features</h3>
                      <ul className="grid sm:grid-cols-2 gap-4">
                        {activeProject.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-[var(--border-color)]">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">The Problem</h3>
                      <p className="text-base">{activeProject.details.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">The Solution</h3>
                      <p className="text-base">{activeProject.details.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">Challenges Faced</h3>
                      <p className="text-base">{activeProject.details.challenges}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">What I Learned</h3>
                      <p className="text-base">{activeProject.details.learnings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
