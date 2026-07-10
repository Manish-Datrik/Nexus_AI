import React from 'react';

export type SectionProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Section Component
 */
export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Section Component
      </div>
    );
  }
);

Section.displayName = 'Section';
