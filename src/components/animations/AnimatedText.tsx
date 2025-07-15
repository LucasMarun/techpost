import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  startOnInView?: boolean;
  onComplete?: () => void;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  speed = 0.05,
  delay = 0,
  startOnInView = true,
  onComplete,
  as: Component = 'span'
}) => {
  const { displayText, containerRef } = useTypewriter({
    text,
    speed,
    delay,
    startOnInView,
    onComplete
  });

  return (
    <Component 
      ref={containerRef}
      className={cn('inline-block', className)}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </Component>
  );
};

interface AnimatedSplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  startOnInView?: boolean;
  onComplete?: () => void;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedSplitText: React.FC<AnimatedSplitTextProps> = ({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  startOnInView = true,
  onComplete,
  as: Component = 'span'
}) => {
  const containerRef = React.useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const chars = text.split('').map((char, index) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.display = 'inline-block';
      return span;
    });

    element.innerHTML = '';
    chars.forEach(span => element.appendChild(span));

    if (!startOnInView) {
      animateChars(chars);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateChars(chars);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [text, startOnInView, isVisible]);

  const animateChars = (chars: HTMLSpanElement[]) => {
    chars.forEach((span, index) => {
      setTimeout(() => {
        span.style.transition = 'all 0.6s ease-out';
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
        
        if (index === chars.length - 1) {
          setTimeout(() => onComplete?.(), 600);
        }
      }, delay * 1000 + index * stagger * 1000);
    });
  };

  return (
    <Component 
      ref={containerRef}
      className={cn('inline-block', className)}
    />
  );
}; 