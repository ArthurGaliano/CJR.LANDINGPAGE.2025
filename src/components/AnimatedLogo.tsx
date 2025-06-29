import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  autoPlay?: boolean;
  className?: string;
  useRealLogo?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ 
  size = 'md', 
  showText = true, 
  autoPlay = true,
  className = '',
  useRealLogo = false
}) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const orbitsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: { icon: 'h-8 w-8', text: 'text-sm', container: 'space-x-2', logo: 'h-8' },
    md: { icon: 'h-10 w-10', text: 'text-base', container: 'space-x-3', logo: 'h-10' },
    lg: { icon: 'h-16 w-16', text: 'text-xl', container: 'space-x-4', logo: 'h-16' },
    xl: { icon: 'h-24 w-24', text: 'text-3xl', container: 'space-x-6', logo: 'h-24' }
  };

  useEffect(() => {
    if (!logoRef.current) return;

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set('.logo-orbit', { rotation: 0, transformOrigin: 'center' });
      gsap.set('.logo-pulse', { scale: 1, opacity: 0.6 });
      gsap.set('.logo-icon', { rotation: 0 });

      if (autoPlay) {
        // Main logo entrance animation
        const tl = gsap.timeline();
        
        tl.from('.logo-container', {
          scale: 0,
          rotation: -180,
          duration: 1,
          ease: 'back.out(1.7)'
        })
        .from('.logo-text', {
          opacity: 0,
          x: -20,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5');

        // Continuous animations
        // Orbiting circles
        gsap.to('.logo-orbit-1', {
          rotation: 360,
          duration: 8,
          ease: 'none',
          repeat: -1
        });

        gsap.to('.logo-orbit-2', {
          rotation: -360,
          duration: 12,
          ease: 'none',
          repeat: -1
        });

        gsap.to('.logo-orbit-3', {
          rotation: 360,
          duration: 15,
          ease: 'none',
          repeat: -1
        });

        // Pulsing effect
        gsap.to('.logo-pulse', {
          scale: 1.3,
          opacity: 0.2,
          duration: 2,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });

        // Icon subtle rotation
        gsap.to('.logo-icon', {
          rotation: 5,
          duration: 3,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });

        // Floating animation for the whole logo
        gsap.to('.logo-container', {
          y: -5,
          duration: 4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        });
      }

      // Hover animations
      const handleMouseEnter = () => {
        gsap.to('.logo-container', {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to('.logo-orbit', {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to('.logo-icon', {
          rotation: 15,
          scale: 1.1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });

        gsap.to('.logo-pulse', {
          scale: 1.5,
          opacity: 0.8,
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to('.logo-container', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to('.logo-orbit', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to('.logo-icon', {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });

        gsap.to('.logo-pulse', {
          scale: 1.3,
          opacity: 0.2,
          duration: 0.3,
          ease: 'power2.out'
        });
      };

      const logoElement = logoRef.current;
      if (logoElement) {
        logoElement.addEventListener('mouseenter', handleMouseEnter);
        logoElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          logoElement.removeEventListener('mouseenter', handleMouseEnter);
          logoElement.removeEventListener('mouseleave', handleMouseLeave);
        };
      }

    }, logoRef);

    return () => ctx.revert();
  }, [autoPlay]);

  return (
    <div 
      ref={logoRef}
      className={`flex items-center ${sizeClasses[size].container} cursor-pointer ${className}`}
    >
      <div className="logo-container relative">
        {useRealLogo ? (
          // Logo real de la empresa
          <div className={`${sizeClasses[size].logo} relative`}>
            <img 
              src="/g1669-3-1.webp" 
              alt="CJR Solutions Enterprise" 
              className={`${sizeClasses[size].logo} w-auto object-contain`}
            />
          </div>
        ) : (
          <>
            {/* Pulsing background */}
            <div 
              ref={pulseRef}
              className="logo-pulse absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20"
            ></div>
            
            {/* Orbiting circles */}
            <div ref={orbitsRef} className="absolute inset-0">
              {/* Orbit 1 */}
              <div className="logo-orbit logo-orbit-1 absolute inset-0 border border-primary-300/30 rounded-full">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary-400 rounded-full"></div>
              </div>
              
              {/* Orbit 2 */}
              <div className="logo-orbit logo-orbit-2 absolute inset-1 border border-secondary-300/40 rounded-full">
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-secondary-400 rounded-full"></div>
              </div>
              
              {/* Orbit 3 */}
              <div className="logo-orbit logo-orbit-3 absolute inset-2 border border-accent-200/50 rounded-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-accent-300 rounded-full"></div>
              </div>
            </div>
            
            {/* Main icon - Globe with signal waves */}
            <div 
              ref={iconRef}
              className={`logo-icon relative z-10 ${sizeClasses[size].icon} bg-gradient-to-br from-primary-500 to-secondary-400 rounded-full flex items-center justify-center shadow-lg`}
            >
              {/* Globe icon */}
              <svg className={`${size === 'xl' ? 'h-12 w-12' : size === 'lg' ? 'h-8 w-8' : size === 'md' ? 'h-5 w-5' : 'h-4 w-4'} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              
              {/* Signal indicator */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-400 rounded-full animate-pulse">
                <div className="absolute inset-0.5 bg-white rounded-full"></div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {showText && (
        <div ref={textRef} className="logo-text flex flex-col">
          <span className={`${sizeClasses[size].text} font-bold text-white-900 leading-tight`}>
            CJR SOLUTIONS
          </span>
          <span className={`${size === 'xl' ? 'text-lg' : size === 'lg' ? 'text-sm' : 'text-xs'} text-gray-600 -mt-1 leading-tight`}>
            ENTERPRISE S.A.C.
          </span>
        </div>
      )}
    </div>
  );
};

export default AnimatedLogo;