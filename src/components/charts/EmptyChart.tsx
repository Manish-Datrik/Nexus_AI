import React from 'react';

export type EmptyChartProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * EmptyChart Component
 */
export const EmptyChart = React.forwardRef<HTMLDivElement, EmptyChartProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        EmptyChart Component
      </div>
    );
  }
);

EmptyChart.displayName = 'EmptyChart';
