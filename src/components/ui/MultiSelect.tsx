import React from 'react';

export type MultiSelectProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * MultiSelect Component
 */
export const MultiSelect = React.forwardRef<HTMLDivElement, MultiSelectProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        MultiSelect Component
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
