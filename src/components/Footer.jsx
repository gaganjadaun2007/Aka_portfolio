import { user } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xs text-[var(--color-text-secondary)] font-mono">
          © {new Date().getFullYear()} {user.name} — Engineering Profile
        </div>
        <div className="text-xs text-[var(--color-text-secondary)] font-mono">
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
}
