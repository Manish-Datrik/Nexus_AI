import React from 'react';

export type MetricCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * MetricCard Component
 */
export const MetricCard = React.forwardRef<HTMLDivElement, MetricCardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        MetricCard Component
      </div>
    );
  }
);

MetricCard.displayName = 'MetricCard';
