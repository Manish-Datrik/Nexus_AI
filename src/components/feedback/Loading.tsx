import React from 'react';

export type LoadingProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Loading Component
 */
export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Loading Component
      </div>
    );
  }
);

Loading.displayName = 'Loading';
