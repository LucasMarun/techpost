import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseScrollRevealOptions {
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  stagger?: number;
}

export const useScrollReveal = ({
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  stagger = 0
}: UseScrollRevealOptions = {}) => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalTransform = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  useEffect(() => {
    const elements = elementsRef.current.filter(Boolean);
    if (elements.length === 0) return;

    // Configurar estado inicial
    gsap.set(elements, getInitialTransform());

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggeredRef.current)) {
            if (triggerOnce) {
              hasTriggeredRef.current = true;
            }

            const targetElement = entry.target as HTMLElement;
            const elementIndex = elements.indexOf(targetElement);

            if (stagger > 0 && elements.length > 1) {
              // Animação com stagger
              gsap.to(elements, {
                ...getFinalTransform(),
                duration,
                delay: delay + (elementIndex * stagger),
                ease: 'power2.out'
              });
            } else {
              // Animação individual
              gsap.to(targetElement, {
                ...getFinalTransform(),
                duration,
                delay,
                ease: 'power2.out'
              });
            }
          } else if (!entry.isIntersecting && !triggerOnce) {
            // Reset para animação repetida
            const targetElement = entry.target as HTMLElement;
            gsap.to(targetElement, {
              ...getInitialTransform(),
              duration: 0.3,
              ease: 'power2.out'
            });
          }
        });
      },
      { threshold }
    );

    elements.forEach((element) => {
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [direction, distance, duration, delay, threshold, triggerOnce, stagger]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const reset = () => {
    hasTriggeredRef.current = false;
    const elements = elementsRef.current.filter(Boolean);
    gsap.set(elements, getInitialTransform());
  };

  return {
    ref: addToRefs,
    reset
  };
}; 