import { journey } from '../data/content';

export function EngineeringJourney() {
  return (
    <section className="section-container" id="journey">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2">Engineering Journey</h2>
        <p className="text-[var(--color-text-secondary)]">A timeline of education and building.</p>
      </div>

      <div className="card">
        <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-6 space-y-8 py-2">
          {journey.map((item, index) => (
            <div key={index} className="relative pl-6 md:pl-8">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[var(--color-bg-secondary)] border-2 border-indigo-400" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-1">
                <span className="metadata-label min-w-[80px]">{item.date}</span>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              
              {item.description && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-1 md:pl-[96px]">
                  {item.description}
                </p>
              )}
              
              {index < journey.length - 1 && (
                <div className="absolute left-[3px] -bottom-6 text-indigo-200 text-xs font-mono md:hidden">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
