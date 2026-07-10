import React from 'react';

export type BarChartProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * BarChart Component
 */
export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        BarChart Component
      </div>
    );
  }
);

BarChart.displayName = 'BarChart';
