import { useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Custom hook to detect mobile screens
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check initially
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Global utility for standardizing scroll spread effects
export function useScrollSpread(ref, options = {}) {
  const {
    offset = ["start end", "end start"],
    inputRange = [0, 0.5, 1], // Usually starts entering, reaches center, leaves
    xOutput = [0, 0, 0],
    yOutput = [0, 0, 0],
    scaleOutput = [1, 1, 1],
    opacityOutput = [1, 1, 1],
    springConfig = { stiffness: 100, damping: 25, mass: 0.5 }
  } = options;

  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();

  // If mobile or reduced motion, significantly reduce or disable movement
  const xMapped = isMobile ? xOutput.map(v => v * 0.3) : xOutput;
  const yMapped = isMobile ? yOutput.map(v => v * 0.3) : yOutput;
  const scaleMapped = isMobile ? scaleOutput.map(s => 1 + (s - 1) * 0.3) : scaleOutput;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  // Apply spring smoothing for momentum
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // For reduced motion, just return static safe values (0 spread, scale 1, full opacity mapped)
  const safeProgress = prefersReducedMotion ? scrollYProgress : smoothProgress;

  const x = useTransform(safeProgress, inputRange, prefersReducedMotion ? [0, 0, 0] : xMapped);
  const y = useTransform(safeProgress, inputRange, prefersReducedMotion ? [0, 0, 0] : yMapped);
  const scale = useTransform(safeProgress, inputRange, prefersReducedMotion ? [1, 1, 1] : scaleMapped);
  const opacity = useTransform(safeProgress, inputRange, opacityOutput);

  return { x, y, scale, opacity, scrollYProgress: safeProgress };
}
