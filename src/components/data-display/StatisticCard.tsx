import React from 'react';

export type StatisticCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * StatisticCard Component
 */
export const StatisticCard = React.forwardRef<HTMLDivElement, StatisticCardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        StatisticCard Component
      </div>
    );
  }
);

StatisticCard.displayName = 'StatisticCard';
