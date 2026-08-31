import { quickInfo } from '../data/content';
import { GraduationCap, Calendar, MapPin, Briefcase } from 'lucide-react';

const iconMap = {
  'graduation': <GraduationCap size={16} />,
  'calendar': <Calendar size={16} />,
  'map-pin': <MapPin size={16} />,
  'briefcase': <Briefcase size={16} />,
};

export function QuickInfo() {
  return (
    <div className="border-y border-[var(--color-border)] bg-white/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4">
        {quickInfo.map((info, index) => (
          <div key={index} className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]">
            <span className="text-[var(--color-text-primary)] opacity-70">
              {iconMap[info.icon]}
            </span>
            <span>{info.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
