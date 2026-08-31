import { user } from '../data/content';

export function IdentityHero() {
  return (
    <section className="section-container pt-20">
      <div className="card">
        <div className="mb-8">
          <h1 className="text-sm font-bold tracking-widest text-[var(--color-text-primary)] uppercase mb-1">
            {user.name}
          </h1>
          <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wide">
            {user.degree}
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] uppercase tracking-wide">
            {user.specialization}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            "{user.statement}"
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            {user.bio}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[var(--color-border)]">
          <div>
            <div className="metadata-label mb-1">STATUS</div>
            <div className="text-sm font-medium">{user.status}</div>
          </div>
          <div>
            <div className="metadata-label mb-1">FOCUS</div>
            <div className="text-sm font-medium">{user.focus}</div>
          </div>
          <div>
            <div className="metadata-label mb-1">BUILDING</div>
            <div className="text-sm font-medium">{user.building}</div>
          </div>
          <div>
            <div className="metadata-label mb-1">LOCATION</div>
            <div className="text-sm font-medium">{user.location}</div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 pt-6 border-t border-[var(--color-border)]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-[var(--color-text-secondary)]">
            Currently building & learning
          </span>
        </div>
      </div>
    </section>
  );
}
