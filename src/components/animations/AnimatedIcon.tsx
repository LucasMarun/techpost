import React from 'react';
import { useIconHover } from '@/hooks/useHoverAnimation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  hoverRotation?: number;
  hoverScale?: number;
  scrollReveal?: boolean;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  children,
  className,
  hoverRotation = 10,
  scrollReveal = true,
  delay = 0,
  as: Component = 'div'
}) => {
  const hoverRef = useIconHover(hoverRotation);
  const { ref: scrollRef } = useScrollReveal({
    direction: 'up',
    distance: 30,
    duration: 0.6,
    delay,
    threshold: 0.3
  });

  const combinedRef = React.useCallback((node: HTMLElement | null) => {
    if (scrollReveal) {
      scrollRef(node);
    }
    if (hoverRef.current !== node) {
      hoverRef.current = node;
    }
  }, [scrollRef, hoverRef, scrollReveal]);

  return (
    <Component 
      ref={combinedRef}
      className={cn(
        'inline-flex items-center justify-center transition-colors',
        className
      )}
    >
      {children}
    </Component>
  );
}; 