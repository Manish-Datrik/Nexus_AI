import React from 'react';

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * GlassCard Component
 */
export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        GlassCard Component
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
