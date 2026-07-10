import React from 'react';

export type LoadingChartProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * LoadingChart Component
 */
export const LoadingChart = React.forwardRef<HTMLDivElement, LoadingChartProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        LoadingChart Component
      </div>
    );
  }
);

LoadingChart.displayName = 'LoadingChart';
