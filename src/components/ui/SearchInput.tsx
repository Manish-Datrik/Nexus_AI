import React from 'react';

export type SearchInputProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * SearchInput Component
 */
export const SearchInput = React.forwardRef<HTMLDivElement, SearchInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        SearchInput Component
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
