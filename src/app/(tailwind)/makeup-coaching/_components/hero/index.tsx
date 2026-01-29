'use client';

import { ArrowDown } from 'lucide-react';
import type { FC } from 'react';
import { memo } from 'react';

import HeroImage from './background.jpg';
import { FadeIn } from '../../../_components/fadeIn';
import { BackgroundImage } from '@/components/backgroundImage';

export const Hero: FC = memo(() => (
  <section className="relative min-h-screen flex flex-col justify-center px-6 py-20 overflow-hidden">
    {/* Background Image Container */}
    <div className="absolute inset-0 z-0">
      <BackgroundImage src={HeroImage} mobile={{ src: HeroImage, objectPosition: '55% 50%', breakpoint: 'md' }} />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
    </div>

    {/* Content */}
    <div className="max-w-7xl mx-auto w-full z-10 relative h-full flex items-center">
      <div className="max-w-4xl">
        <FadeIn>
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/80 mb-6 block">
            Elevate Your Look
          </span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl leading-[1.1] text-white mb-8">
            Learn Makeup from a Celebrity Makeup Artist.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-sans text-lg md:text-xl font-light text-white/90 max-w-lg leading-relaxed mb-10 border-l-2 border-white/30 pl-6">
            Look and feel your best every day.
          </p>
        </FadeIn>
      </div>
    </div>

    <FadeIn delay={0.6} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
      <ArrowDown className="animate-bounce text-white/60 w-8 h-8" />
    </FadeIn>
  </section>
));

Hero.displayName = 'Hero';
