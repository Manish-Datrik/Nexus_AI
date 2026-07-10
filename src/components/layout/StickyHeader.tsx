import React from 'react';

export type StickyHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * StickyHeader Component
 */
export const StickyHeader = React.forwardRef<HTMLDivElement, StickyHeaderProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        StickyHeader Component
      </div>
    );
  }
);

StickyHeader.displayName = 'StickyHeader';
