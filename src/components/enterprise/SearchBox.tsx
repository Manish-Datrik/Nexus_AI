import React from 'react';

export type SearchBoxProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * SearchBox Component
 */
export const SearchBox = React.forwardRef<HTMLDivElement, SearchBoxProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        SearchBox Component
      </div>
    );
  }
);

SearchBox.displayName = 'SearchBox';
