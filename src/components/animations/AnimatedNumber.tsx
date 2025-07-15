import React from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { cn } from '@/lib/utils';

interface AnimatedNumberProps {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  startOnInView?: boolean;
  threshold?: number;
  onComplete?: () => void;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  className,
  prefix = '',
  suffix = '',
  decimals = 0,
  startOnInView = true,
  threshold = 0.3,
  onComplete,
  as: Component = 'span'
}) => {
  const formatNumber = (value: number) => {
    const formatted = decimals > 0 
      ? value.toFixed(decimals) 
      : Math.round(value).toString();
    return `${prefix}${formatted}${suffix}`;
  };

  const { displayValue, elementRef } = useCounterAnimation({
    start,
    end,
    duration,
    delay,
    startOnInView,
    threshold,
    formatNumber,
    onComplete
  });

  return (
    <Component 
      ref={elementRef}
      className={cn('tabular-nums', className)}
    >
      {displayValue}
    </Component>
  );
};

interface AnimatedPercentageProps {
  percentage: number;
  duration?: number;
  delay?: number;
  className?: string;
  startOnInView?: boolean;
  threshold?: number;
  onComplete?: () => void;
}

export const AnimatedPercentage: React.FC<AnimatedPercentageProps> = ({
  percentage,
  duration = 2,
  delay = 0,
  className,
  startOnInView = true,
  threshold = 0.3,
  onComplete
}) => {
  return (
    <AnimatedNumber
      start={0}
      end={percentage}
      duration={duration}
      delay={delay}
      className={className}
      suffix="%"
      startOnInView={startOnInView}
      threshold={threshold}
      onComplete={onComplete}
    />
  );
}; 