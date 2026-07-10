import React from 'react';

export type CircularProgressProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * CircularProgress Component
 */
export const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        CircularProgress Component
      </div>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';
