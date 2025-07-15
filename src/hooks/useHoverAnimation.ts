import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UseHoverAnimationOptions {
  scale?: number;
  rotate?: number;
  duration?: number;
  ease?: string;
  yoyo?: boolean;
  transformOrigin?: string;
}

export const useHoverAnimation = ({
  scale = 1.05,
  rotate = 0,
  duration = 0.3,
  ease = 'power2.out',
  yoyo = false,
  transformOrigin = 'center'
}: UseHoverAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Configurar transform origin
    gsap.set(element, { transformOrigin });

    const handleMouseEnter = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      timelineRef.current = gsap.timeline();
      timelineRef.current.to(element, {
        scale,
        rotation: rotate,
        duration,
        ease,
        yoyo,
        repeat: yoyo ? 1 : 0
      });
    };

    const handleMouseLeave = () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      timelineRef.current = gsap.timeline();
      timelineRef.current.to(element, {
        scale: 1,
        rotation: 0,
        duration,
        ease
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      timelineRef.current?.kill();
    };
  }, [scale, rotate, duration, ease, yoyo, transformOrigin]);

  return elementRef;
};

// Hook específico para botões com efeitos mais elaborados
export const useButtonHover = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.timeline()
        .to(element, {
          scale: 1.02,
          duration: 0.2,
          ease: 'power2.out'
        })
        .to(element, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
        });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return elementRef;
};

// Hook para ícones com rotação suave
export const useIconHover = (rotationDegree: number = 10) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        rotation: rotationDegree,
        scale: 1.1,
        duration: 0.3,
        ease: 'back.out(1.4)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotation: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [rotationDegree]);

  return elementRef;
}; 