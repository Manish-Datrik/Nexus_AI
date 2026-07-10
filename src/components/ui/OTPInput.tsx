import React from 'react';

export type OTPInputProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * OTPInput Component
 */
export const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        OTPInput Component
      </div>
    );
  }
);

OTPInput.displayName = 'OTPInput';
