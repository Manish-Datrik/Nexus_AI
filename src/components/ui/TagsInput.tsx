import React from 'react';

export type TagsInputProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * TagsInput Component
 */
export const TagsInput = React.forwardRef<HTMLDivElement, TagsInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        TagsInput Component
      </div>
    );
  }
);

TagsInput.displayName = 'TagsInput';
