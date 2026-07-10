import React from 'react';

export type ConfirmDialogProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ConfirmDialog Component
 */
export const ConfirmDialog = React.forwardRef<HTMLDivElement, ConfirmDialogProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ConfirmDialog Component
      </div>
    );
  }
);

ConfirmDialog.displayName = 'ConfirmDialog';
