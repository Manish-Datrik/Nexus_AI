import React from 'react';

export type DataGridProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * DataGrid Component
 */
export const DataGrid = React.forwardRef<HTMLDivElement, DataGridProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        DataGrid Component
      </div>
    );
  }
);

DataGrid.displayName = 'DataGrid';
