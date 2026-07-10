import React from 'react';

export type DropdownProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Dropdown Component
 */
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Dropdown Component
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
