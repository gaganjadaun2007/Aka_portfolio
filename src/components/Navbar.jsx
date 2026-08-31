import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { user } from '../data/content';
import { useTheme } from '../hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Toolkit', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 transition-all duration-400 theme-transition border ${
          scrolled 
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-md shadow-lg border-[var(--border-color)]' 
            : 'bg-[var(--bg-primary)]/50 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#" className="font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors">
            {user.name}
          </a>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm">
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-1.5 rounded-full hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <a 
              href={user.resumeUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="hidden md:flex text-sm font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-secondary)] transition-colors"
            >
              Resume
            </a>

            <button 
              className="md:hidden p-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-[var(--bg-primary)]/95 backdrop-blur-md md:hidden pt-24 px-6 flex flex-col items-center"
          >
            <button 
              className="absolute top-8 right-8 p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-8 text-center mt-12 w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-3xl font-bold text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={user.resumeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="mt-8 btn-primary w-full max-w-xs mx-auto text-lg"
                onClick={() => setIsOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
