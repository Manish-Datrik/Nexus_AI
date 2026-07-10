import React from 'react';

export type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * AvatarGroup Component
 */
export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        AvatarGroup Component
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
