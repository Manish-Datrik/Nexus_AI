import React from 'react';

export type SuccessStateProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * SuccessState Component
 */
export const SuccessState = React.forwardRef<HTMLDivElement, SuccessStateProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        SuccessState Component
      </div>
    );
  }
);

SuccessState.displayName = 'SuccessState';
