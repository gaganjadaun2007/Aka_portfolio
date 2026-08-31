import { stack } from '../data/content';

export function TechStack() {
  return (
    <section className="section-container" id="stack">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Current Stack</h2>
        <p className="text-[var(--color-text-secondary)]">Tools and technologies I use to build.</p>
      </div>

      <div className="flex flex-col gap-6">
        {stack.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-[var(--color-border)] last:border-0">
            <div className="w-32 metadata-label shrink-0">
              {category.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1.5 bg-gray-100 text-sm font-medium rounded-md text-[var(--color-text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
