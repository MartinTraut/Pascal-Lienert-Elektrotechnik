"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseAnimateOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Check for reduced motion preference (safe for SSR)
function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  options: UseAnimateOnScrollOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        hasTriggeredRef.current = true;
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If user prefers reduced motion, show content immediately
    if (getPrefersReducedMotion()) {
      if (!hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        // Use requestAnimationFrame to avoid synchronous setState in effect
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible };
}
