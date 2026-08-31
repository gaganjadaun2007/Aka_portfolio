import { highlights } from '../data/content';
import { Terminal, Compass, Puzzle } from 'lucide-react';

const iconMap = {
  'terminal': <Terminal size={24} className="text-[var(--color-accent)]" />,
  'compass': <Compass size={24} className="text-[var(--color-accent)]" />,
  'puzzle': <Puzzle size={24} className="text-[var(--color-accent)]" />,
};

export function Highlights() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-20 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((item, index) => (
          <div key={index} className="card-premium group">
            <div className="mb-6 w-12 h-12 rounded-xl bg-indigo-50/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-300">
              {iconMap[item.icon]}
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
