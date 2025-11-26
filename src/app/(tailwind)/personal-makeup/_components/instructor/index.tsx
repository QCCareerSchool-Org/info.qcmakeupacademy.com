import Image from 'next/image';
import type { FC } from 'react';
import { FadeIn } from '../../../_components/fadeIn';

import NathanImage from './nathan.jpg';

export const Instructor: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-linen-dark px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image Stack */}
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto bg-charcoal p-1">
            <Image src={NathanImage} className="w-full h-full object-cover opacity-90" alt="Nathan Johnson" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-charcoal/30 z-0 hidden md:block max-w-md mx-auto left-0 right-0 lg:mx-0 lg:left-[-24px]" />
        </FadeIn>

        {/* Text Content */}
        <div className="order-1 lg:order-2">
          <FadeIn delay={0.2}>
            <span className="block font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 text-charcoal/60">
              Your Personal Makeup Coach
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Meet Nathan Johnson.
            </h2>
            <div className="space-y-6 font-sans text-lg font-light text-charcoal/80 leading-relaxed">
              <p>
                Nathan Johnson isn't just a celebrity makeup artist—he's your personal guide to feeling amazing in your own skin.
              </p>
              <p>
                With experience on red carpets, magazine shoots, and television appearances, Nathan has worked with the stars, but his true passion is helping everyday people discover their own beauty.
              </p>
              <blockquote className="border-l-2 border-charcoal pl-6 py-2 my-8 text-xl font-serif italic text-charcoal">
                &ldquo;Makeup isn't about hiding flaws; it's about celebrating you.&rdquo;
              </blockquote>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
