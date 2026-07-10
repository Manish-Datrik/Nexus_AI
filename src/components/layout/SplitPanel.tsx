import React from 'react';

export type SplitPanelProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * SplitPanel Component
 */
export const SplitPanel = React.forwardRef<HTMLDivElement, SplitPanelProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        SplitPanel Component
      </div>
    );
  }
);

SplitPanel.displayName = 'SplitPanel';
