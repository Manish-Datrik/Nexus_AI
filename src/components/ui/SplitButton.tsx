import React from 'react';

export type SplitButtonProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * SplitButton Component
 */
export const SplitButton = React.forwardRef<HTMLDivElement, SplitButtonProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        SplitButton Component
      </div>
    );
  }
);

SplitButton.displayName = 'SplitButton';
