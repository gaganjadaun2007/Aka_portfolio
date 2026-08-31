import { snapshot } from '../data/content';

export function ProfileSnapshot() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
        {snapshot.map((item) => (
          <div key={item.id} className="bg-[var(--color-bg-primary)] p-6">
            <div className="metadata-label mb-2 flex gap-2">
              <span className="text-[var(--color-text-primary)]">{item.id}</span>
              <span>—</span>
              <span>{item.title}</span>
            </div>
            <div className="text-sm font-medium text-[var(--color-text-primary)]">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
