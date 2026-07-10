import React from 'react';

export type KeyValuePanelProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * KeyValuePanel Component
 */
export const KeyValuePanel = React.forwardRef<HTMLDivElement, KeyValuePanelProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        KeyValuePanel Component
      </div>
    );
  }
);

KeyValuePanel.displayName = 'KeyValuePanel';
