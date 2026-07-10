import React from 'react';

export type TagProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Tag Component
 */
export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Tag Component
      </div>
    );
  }
);

Tag.displayName = 'Tag';
