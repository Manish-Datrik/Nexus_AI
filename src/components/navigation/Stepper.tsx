import React from 'react';

export type StepperProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Stepper Component
 */
export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Stepper Component
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
