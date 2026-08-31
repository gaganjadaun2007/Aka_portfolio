import { Terminal, BrainCircuit, Cpu } from 'lucide-react';
import { whatIBuild } from '../data/content';

const icons = {
  'Software': <Terminal size={24} className="text-[var(--color-accent)]" />,
  'AI / ML': <BrainCircuit size={24} className="text-[var(--color-accent)]" />,
  'Systems / IoT': <Cpu size={24} className="text-[var(--color-accent)]" />
};

export function WhatIBuild() {
  return (
    <section className="section-container" id="work">
      <div className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-4">What I Build</h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
          I like turning ideas into working software. Most of my learning comes from building projects, experimenting with technologies and understanding how things work underneath.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {whatIBuild.map((area, index) => (
          <div key={index} className="card hover:border-[var(--color-text-primary)] transition-colors group">
            <div className="mb-4 p-3 bg-indigo-50 w-fit rounded-lg group-hover:bg-indigo-100 transition-colors">
              {icons[area.title]}
            </div>
            <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
