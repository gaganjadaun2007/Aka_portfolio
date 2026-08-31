import { exploring } from '../data/content';

export function CurrentlyLearning() {
  return (
    <section className="max-w-5xl mx-auto px-6 mb-20">
      <div className="card-premium flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
        <div className="shrink-0">
          <h3 className="text-xl font-bold tracking-tight mb-2">Currently Exploring</h3>
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Learning
          </div>
        </div>
        
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {exploring.map((topic, index) => (
            <div key={index} className="text-sm font-medium text-[var(--color-text-secondary)]">
              {topic}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
