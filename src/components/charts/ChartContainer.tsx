import React from 'react';

export type ChartContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ChartContainer Component
 */
export const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ChartContainer Component
      </div>
    );
  }
);

ChartContainer.displayName = 'ChartContainer';
