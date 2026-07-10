import React from 'react';

export type ContextMenuProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ContextMenu Component
 */
export const ContextMenu = React.forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ContextMenu Component
      </div>
    );
  }
);

ContextMenu.displayName = 'ContextMenu';
