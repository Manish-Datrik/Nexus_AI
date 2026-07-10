import React from 'react';

export type HelperTextProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * HelperText Component
 */
export const HelperText = React.forwardRef<HTMLDivElement, HelperTextProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        HelperText Component
      </div>
    );
  }
);

HelperText.displayName = 'HelperText';
