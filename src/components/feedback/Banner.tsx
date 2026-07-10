import React from 'react';

export type BannerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Banner Component
 */
export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        Banner Component
      </div>
    );
  }
);

Banner.displayName = 'Banner';
