import { education } from '../data/content';

export function Education() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-12">
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[var(--color-text-primary)] mb-1">
              {education.degree}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {education.specialization}
            </p>
            {education.university !== '[ADD UNIVERSITY]' && (
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                {education.university}
              </p>
            )}
          </div>
          <div className="metadata-label shrink-0">
            {education.period}
          </div>
        </div>
      </div>
    </section>
  );
}
