import React from 'react';

export type ChartLegendProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ChartLegend Component
 */
export const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ChartLegend Component
      </div>
    );
  }
);

ChartLegend.displayName = 'ChartLegend';
