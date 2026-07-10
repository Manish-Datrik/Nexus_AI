import React from 'react';

export type NotificationItemProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * NotificationItem Component
 */
export const NotificationItem = React.forwardRef<HTMLDivElement, NotificationItemProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        NotificationItem Component
      </div>
    );
  }
);

NotificationItem.displayName = 'NotificationItem';
