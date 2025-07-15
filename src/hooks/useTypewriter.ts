import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  startOnInView?: boolean;
}

export const useTypewriter = ({
  text,
  speed = 0.05,
  delay = 0,
  onComplete,
  startOnInView = false
}: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const startAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    setDisplayText('');
    setIsComplete(false);

    const timeline = gsap.timeline({ delay });
    timelineRef.current = timeline;

    const chars = text.split('');
    
    chars.forEach((char, index) => {
      timeline.call(() => {
        setDisplayText(prev => prev + char);
      }, [], index * speed);
    });

    timeline.call(() => {
      setIsComplete(true);
      onComplete?.();
    });
  };

  useEffect(() => {
    if (!startOnInView) {
      startAnimation();
      return;
    }

    if (containerRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isComplete) {
              startAnimation();
              observerRef.current?.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      observerRef.current.observe(containerRef.current);
    }

    return () => {
      timelineRef.current?.kill();
      observerRef.current?.disconnect();
    };
  }, [text, speed, delay, startOnInView]);

  return {
    displayText,
    isComplete,
    containerRef,
    restart: startAnimation
  };
}; 