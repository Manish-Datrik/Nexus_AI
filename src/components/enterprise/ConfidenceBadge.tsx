import React from 'react';

export type ConfidenceBadgeProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ConfidenceBadge Component
 */
export const ConfidenceBadge = React.forwardRef<HTMLDivElement, ConfidenceBadgeProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ConfidenceBadge Component
      </div>
    );
  }
);

ConfidenceBadge.displayName = 'ConfidenceBadge';
