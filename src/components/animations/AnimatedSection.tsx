import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  direction = 'up',
  distance = 50,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  triggerOnce = true,
  stagger = 0,
  as: Component = 'div'
}) => {
  const { ref } = useScrollReveal({
    direction,
    distance,
    duration,
    delay,
    threshold,
    triggerOnce,
    stagger
  });

  return (
    <Component 
      ref={ref}
      className={cn(className)}
    >
      {children}
    </Component>
  );
};

interface AnimatedGridProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
  stagger?: number;
  cols?: number;
}

export const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  className,
  direction = 'up',
  distance = 30,
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
  stagger = 0.1,
  cols = 3
}) => {
  const { ref } = useScrollReveal({
    direction,
    distance,
    duration,
    delay,
    threshold,
    triggerOnce: true,
    stagger
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <div className={cn('grid gap-6', {
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': cols === 3,
      'grid-cols-1 md:grid-cols-2': cols === 2,
      'grid-cols-1': cols === 1,
    }, className)}>
      {childrenArray.map((child, index) => (
        <div key={index} ref={ref}>
          {child}
        </div>
      ))}
    </div>
  );
}; 