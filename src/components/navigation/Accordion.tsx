import React from 'react';

export type AccordionProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Accordion Component
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Accordion Component
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
