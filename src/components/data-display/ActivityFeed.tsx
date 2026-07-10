import React from 'react';

export type ActivityFeedProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ActivityFeed Component
 */
export const ActivityFeed = React.forwardRef<HTMLDivElement, ActivityFeedProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ActivityFeed Component
      </div>
    );
  }
);

ActivityFeed.displayName = 'ActivityFeed';
