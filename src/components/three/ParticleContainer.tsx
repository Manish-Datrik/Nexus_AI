import React from 'react';

export type ParticleContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * ParticleContainer Component
 */
export const ParticleContainer = React.forwardRef<HTMLDivElement, ParticleContainerProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={`${className}`} 
        {...props}
      >
        ParticleContainer Component
      </div>
    );
  }
);

ParticleContainer.displayName = 'ParticleContainer';
