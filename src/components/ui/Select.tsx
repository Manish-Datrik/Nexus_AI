import React from 'react';

export type SelectProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Select Component
 */
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Select Component
      </div>
    );
  }
);

Select.displayName = 'Select';
