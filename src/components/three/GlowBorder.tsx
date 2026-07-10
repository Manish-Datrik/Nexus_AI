import React from 'react';

export type GlowBorderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * GlowBorder Component
 */
export const GlowBorder = React.forwardRef<HTMLDivElement, GlowBorderProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        GlowBorder Component
      </div>
    );
  }
);

GlowBorder.displayName = 'GlowBorder';
