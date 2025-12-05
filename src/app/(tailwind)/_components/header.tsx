'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { Button } from './button';

export const Header: FC = () => {
  const [ showStickyNav, setShowStickyNav ] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Show sticky nav after scrolling past hero (approx 800px)
      if (window.scrollY > 800) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (): void => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="antialiased selection:bg-sand selection:text-white">
      {/* Sticky Call to Action Nav */}
      <div className={`fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-charcoal/10 transition-transform duration-500 ${showStickyNav ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-charcoal font-bold hidden sm:block">QC Makeup Academy</span>
          <div className="flex items-center gap-4 ml-auto">
            <span className="font-sans text-xs uppercase tracking-widest text-charcoal/60 hidden md:block">
              Limited spots available
            </span>
            <Button onClick={handleClick} className="py-2 px-6 text-xs">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
