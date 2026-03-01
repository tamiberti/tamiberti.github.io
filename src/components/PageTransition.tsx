import { useEffect, useState } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Wave Transition Overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-1000 ease-in-out ${
          isTransitioning ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="hsl(10 30% 75%)"
            d="M0,0 L1440,0 L1440,800 Q1080,700 720,800 T0,800 Z"
            className="animate-wave-reveal"
          />
        </svg>
      </div>

      {/* Content with fade-in animation */}
      <div
        className={`transition-opacity duration-700 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
