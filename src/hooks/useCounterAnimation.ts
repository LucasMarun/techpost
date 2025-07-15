import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface UseCounterAnimationOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  ease?: string;
  onUpdate?: (value: number) => void;
  onComplete?: () => void;
  startOnInView?: boolean;
  threshold?: number;
  formatNumber?: (value: number) => string;
}

export const useCounterAnimation = ({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  ease = 'power2.out',
  onUpdate,
  onComplete,
  startOnInView = true,
  threshold = 0.3,
  formatNumber = (value) => Math.round(value).toString()
}: UseCounterAnimationOptions) => {
  const [currentValue, setCurrentValue] = useState(start);
  const [displayValue, setDisplayValue] = useState(formatNumber(start));
  const [isComplete, setIsComplete] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const startAnimation = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const counter = { value: start };
    
    timelineRef.current = gsap.timeline({ delay });
    timelineRef.current.to(counter, {
      value: end,
      duration,
      ease,
      onUpdate: () => {
        const newValue = counter.value;
        setCurrentValue(newValue);
        setDisplayValue(formatNumber(newValue));
        onUpdate?.(newValue);
      },
      onComplete: () => {
        setIsComplete(true);
        onComplete?.();
      }
    });
  };

  useEffect(() => {
    if (!startOnInView) {
      startAnimation();
      return;
    }

    if (elementRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasTriggeredRef.current) {
              hasTriggeredRef.current = true;
              startAnimation();
            }
          });
        },
        { threshold }
      );

      observerRef.current.observe(elementRef.current);
    }

    return () => {
      timelineRef.current?.kill();
      observerRef.current?.disconnect();
    };
  }, [end, duration, delay, ease, startOnInView, threshold]);

  const reset = () => {
    hasTriggeredRef.current = false;
    setCurrentValue(start);
    setDisplayValue(formatNumber(start));
    setIsComplete(false);
    timelineRef.current?.kill();
  };

  return {
    currentValue,
    displayValue,
    isComplete,
    elementRef,
    reset,
    restart: startAnimation
  };
}; 