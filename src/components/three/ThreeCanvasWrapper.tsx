import React from 'react';

export type ThreeCanvasWrapperProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ThreeCanvasWrapper Component
 */
export const ThreeCanvasWrapper = React.forwardRef<HTMLDivElement, ThreeCanvasWrapperProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ThreeCanvasWrapper Component
      </div>
    );
  }
);

ThreeCanvasWrapper.displayName = 'ThreeCanvasWrapper';
