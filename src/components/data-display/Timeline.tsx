import React from 'react';

export type TimelineProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Timeline Component
 */
export const Timeline = React.forwardRef<HTMLDivElement, TimelineProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Timeline Component
      </div>
    );
  }
);

Timeline.displayName = 'Timeline';
