import React from 'react';

export type StackProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Stack Component
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Stack Component
      </div>
    );
  }
);

Stack.displayName = 'Stack';
