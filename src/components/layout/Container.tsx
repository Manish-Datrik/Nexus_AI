import React from 'react';

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Container Component
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Container Component
      </div>
    );
  }
);

Container.displayName = 'Container';
