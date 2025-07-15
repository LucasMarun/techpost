import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface TypewriterTitleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

export const TypewriterTitle: React.FC<TypewriterTitleProps> = ({
  children,
  className,
  delay = 0.5,
  duration = 0.8,
  stagger = 0.02
}) => {
  const titleRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = titleRef.current;
    if (!element) return;

    // Criar observer para trigger quando entrar na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateTitle();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible]);

  const animateTitle = () => {
    const element = titleRef.current;
    if (!element) return;

    // Configurar estado inicial
    gsap.set(element, { opacity: 0, y: 50 });

    // Animar entrada
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power2.out'
    });

    // Animar caracteres se necessário
    const textNodes = element.querySelectorAll('*');
    if (textNodes.length > 0) {
      gsap.from(textNodes, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: delay + 0.3,
        stagger,
        ease: 'power2.out'
      });
    }
  };

  return React.cloneElement(children as React.ReactElement, {
    ref: titleRef,
    className: cn(className, children.props?.className)
  });
}; 