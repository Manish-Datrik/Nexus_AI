import React from 'react';

export type QuickActionCardProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * QuickActionCard Component
 */
export const QuickActionCard = React.forwardRef<HTMLDivElement, QuickActionCardProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        QuickActionCard Component
      </div>
    );
  }
);

QuickActionCard.displayName = 'QuickActionCard';
