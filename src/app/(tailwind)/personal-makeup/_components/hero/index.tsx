import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Button } from '../Button';
import { FadeIn } from '../FadeIn';

import HeroImage from './background.jpg';
import { BackgroundImage } from '@/components/backgroundImage';

const words = [ 'Beautiful.', 'Confident.', 'Effortlessly You.' ];

export const Hero: FC = () => {
  const [ index, setIndex ] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToPricing = (): void => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <BackgroundImage src={HeroImage} />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full z-10 relative h-full flex items-center">
        <div className="max-w-4xl">
          <FadeIn>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/80 mb-6 block">
              QC Makeup Academy
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white mb-8">
              Learn Makeup That Makes You Feel{' '}
              <span className="inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="font-serif italic font-light text-white/90 block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="font-sans text-lg md:text-xl font-light text-white/90 max-w-lg leading-relaxed mb-10 border-l-2 border-white/30 pl-6">
              Feel polished, radiant, and confident every single day. Not a mask—just the best version of you.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Button
              variant="white"
              onClick={scrollToPricing}
            >
              Secure Your Spot
            </Button>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="animate-bounce text-white/60 w-8 h-8" />
      </FadeIn>
    </section>
  );
};
