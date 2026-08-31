import { FileText } from 'lucide-react';
import { user } from '../data/content';

export function ResumeCard() {
  return (
    <section className="section-container border-t border-[var(--color-border)]">
      <div className="card border-indigo-100 bg-indigo-50/30">
        <div className="metadata-label mb-4 text-indigo-500">LOOKING FOR THE SHORT VERSION?</div>
        
        <p className="text-sm text-[var(--color-text-primary)] max-w-md mb-6 leading-relaxed">
          My resume contains a concise overview of my education, technical skills and projects.
        </p>

        <a 
          href={user.resumeUrl} 
          target="_blank" 
          rel="noreferrer"
          className="btn-primary inline-flex items-center"
        >
          <FileText size={16} className="mr-2" />
          DOWNLOAD RESUME
        </a>
      </div>
    </section>
  );
}
