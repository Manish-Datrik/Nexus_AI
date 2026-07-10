import React from 'react';

export type ButtonGroupProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ButtonGroup Component
 */
export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ButtonGroup Component
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';
