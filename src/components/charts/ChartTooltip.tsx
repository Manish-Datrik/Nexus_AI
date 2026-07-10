import React from 'react';

export type ChartTooltipProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ChartTooltip Component
 */
export const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ChartTooltip Component
      </div>
    );
  }
);

ChartTooltip.displayName = 'ChartTooltip';
