import React from 'react';

export type ChipProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Chip Component
 */
export const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Chip Component
      </div>
    );
  }
);

Chip.displayName = 'Chip';
