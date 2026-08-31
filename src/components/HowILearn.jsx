import { principles } from '../data/content';

export function HowILearn() {
  return (
    <section className="section-container">
      <div className="mb-6 border-b border-[var(--color-border)] pb-2">
        <h2 className="text-sm font-bold tracking-widest text-[var(--color-text-secondary)] uppercase">How I Learn</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {principles.map((principle, index) => (
          <div key={index}>
            <h3 className="text-sm font-bold mb-1">{principle.title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
