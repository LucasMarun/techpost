import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useButtonHover } from '@/hooks/useHoverAnimation';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  rippleEffect?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  rippleEffect = true,
  ...props
}) => {
  const buttonRef = useButtonHover();
  const rippleRef = React.useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rippleEffect && rippleRef.current) {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
      `;

      rippleRef.current.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    }

    props.onClick?.(e);
  };

  return (
    <Button
      ref={buttonRef}
      className={cn(
        'relative overflow-hidden transition-all duration-300',
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div ref={rippleRef} className="absolute inset-0 pointer-events-none" />
      {children}
    </Button>
  );
};

// Estilo CSS para o efeito ripple (adicionar ao CSS global)
const rippleStyles = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
`;

// Injetar estilos globalmente
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = rippleStyles;
  document.head.appendChild(style);
} 