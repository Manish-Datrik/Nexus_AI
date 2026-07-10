import React from 'react';

export type SliderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Slider Component
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Slider Component
      </div>
    );
  }
);

Slider.displayName = 'Slider';
