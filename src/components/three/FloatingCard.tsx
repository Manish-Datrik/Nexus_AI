import React from 'react';

export type FloatingCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * FloatingCard Component
 */
export const FloatingCard = React.forwardRef<HTMLDivElement, FloatingCardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        FloatingCard Component
      </div>
    );
  }
);

FloatingCard.displayName = 'FloatingCard';
