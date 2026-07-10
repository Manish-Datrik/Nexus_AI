import React from 'react';

export type GlassSurfaceProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * GlassSurface Component
 */
export const GlassSurface = React.forwardRef<HTMLDivElement, GlassSurfaceProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        GlassSurface Component
      </div>
    );
  }
);

GlassSurface.displayName = 'GlassSurface';
