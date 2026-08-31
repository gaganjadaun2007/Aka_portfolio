import { ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/content';

const GithubIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

export function SelectedBuilds() {
  return (
    <section className="section-container">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Selected Builds</h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          A few things I've built while learning and experimenting. Every project is an engineering case study.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div key={project.id} className="card group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <span className="font-mono text-8xl font-bold">{project.id}</span>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              {/* Left Column: Metadata */}
              <div>
                <div className="metadata-label mb-6">BUILD / {project.id}</div>
                
                <div className="mb-6">
                  <div className="metadata-label mb-1">STATUS</div>
                  <div className="text-sm font-medium">{project.status}</div>
                </div>

                <div className="mb-6">
                  <div className="metadata-label mb-2">STACK</div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded text-[var(--color-text-primary)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-[var(--color-accent)] font-medium text-sm mb-4">{project.subtitle}</p>
                
                <div className="mb-6">
                  <div className="metadata-label mb-2">ABOUT</div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {project.about}
                  </p>
                </div>

                {project.whatIBuilt && (
                  <div className="mb-6">
                    <div className="metadata-label mb-2">WHAT I BUILT</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.whatIBuilt.map((feature, i) => (
                        <li key={i} className="text-sm flex items-start gap-2 text-[var(--color-text-secondary)]">
                          <span className="text-[var(--color-accent)] mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.architecture && (
                  <div className="mb-6">
                    <div className="metadata-label mb-2">ARCHITECTURE</div>
                    <pre className="text-xs font-mono bg-gray-50 p-4 rounded-md border border-[var(--color-border)] overflow-x-auto text-[var(--color-text-secondary)]">
                      {project.architecture}
                    </pre>
                  </div>
                )}

                {(project.implemented || project.planned) && (
                  <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.implemented && (
                      <div>
                        <div className="metadata-label mb-2 text-green-600">IMPLEMENTED</div>
                        <ul className="space-y-1">
                          {project.implemented.map((feature, i) => (
                            <li key={i} className="text-sm flex items-start gap-2 text-[var(--color-text-secondary)]">
                              <span className="text-green-500 mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.planned && (
                      <div>
                        <div className="metadata-label mb-2 text-gray-400">PLANNED / FUTURE</div>
                        <ul className="space-y-1">
                          {project.planned.map((feature, i) => (
                            <li key={i} className="text-sm flex items-start gap-2 text-gray-400">
                              <span className="mt-0.5">○</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-[var(--color-border)]">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary group">
                    <GithubIcon size={16} className="mr-2 group-hover:text-[var(--color-accent)] transition-colors" />
                    Source Code
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-secondary group">
                    <ExternalLink size={16} className="mr-2 group-hover:text-[var(--color-accent)] transition-colors" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
