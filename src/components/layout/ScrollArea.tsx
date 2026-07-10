import React from 'react';

export type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ScrollArea Component
 */
export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ScrollArea Component
      </div>
    );
  }
);

ScrollArea.displayName = 'ScrollArea';
