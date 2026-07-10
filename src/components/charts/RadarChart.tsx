import React from 'react';

export type RadarChartProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * RadarChart Component
 */
export const RadarChart = React.forwardRef<HTMLDivElement, RadarChartProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        RadarChart Component
      </div>
    );
  }
);

RadarChart.displayName = 'RadarChart';
