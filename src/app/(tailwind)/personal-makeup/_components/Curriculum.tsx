import { Check, Play, Sparkles, Star, User } from 'lucide-react';
import React from 'react';
import type { FC } from 'react';

import { FadeIn } from './FadeIn';

export const Curriculum: FC = () => {
  const methods = [
    { icon: Play as FC<{ className?: string }>, title: 'Professional Video Lessons', desc: 'Complete at your own pace.' },
    { icon: Star as FC<{ className?: string }>, title: 'Real-Life Applications', desc: 'Build skills & confidence.' },
    { icon: User as FC<{ className?: string }>, title: 'Personalized Coaching', desc: 'Create a routine fitting your life.' },
  ];

  const fundamentals = [
    {
      category: 'Skin Prep',
      items: [ 'Proper skincare', 'Concealing under-eye circles' ],
    },
    {
      category: 'Complexion',
      items: [ 'Using primer & foundation', 'Hiding redness & blemishes', 'Applying blush, highlight & contour' ],
    },
    {
      category: 'Eye Makeup',
      items: [ 'Eyeshadow application', 'Eyeliner application', 'Apply false lashes' ],
    },
  ];

  const outcomes = [
    { icon: Check as FC<{ className?: string }>, title: 'Under 20 Minutes', desc: 'Create perfect everyday & evening looks confidently without stress.' },
    { icon: Check as FC<{ className?: string }>, title: 'Eliminate Guesswork', desc: 'Know exactly which 5-10 products enhance your features.' },
    { icon: Check as FC<{ className?: string }>, title: 'Self-Care Ritual', desc: 'Transform your routine into a 5-minute moment for yourself.' },
    { icon: Check as FC<{ className?: string }>, title: 'Professional Skills', desc: 'Choose from 50+ techniques to try trends or enhance staples.' },
    { icon: Sparkles as FC<{ className?: string }>, title: 'Custom Skincare Routine', desc: 'Learn easy-to-follow steps that keep your complexion fresh and healthy with a custom skincare routine.' },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl leading-tight">
            How You'll Learn: A Multi-Tiered System Designed for You
          </h2>
        </FadeIn>

        {/* Methodology Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {methods.map((m, i) => (
            <FadeIn key={i} delay={i * 0.1} className="text-center px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-linen border border-charcoal/10">
                <m.icon className="w-5 h-5 text-charcoal" />
              </div>
              <h3 className="font-serif text-xl mb-2">{m.title}</h3>
              <p className="font-sans text-sm text-charcoal/60">{m.desc}</p>
            </FadeIn>
          ))}
        </div>

        {/* Moved Description Text */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-24 border-b border-charcoal/10 pb-12">
          <p className="font-sans text-lg font-light text-charcoal/70 leading-relaxed">
            With Nathan as your coach, every lesson is more than makeup—it's a moment of self-care, empowerment and self-expression.
          </p>
        </FadeIn>

        {/* Mind Map Section - Fundamentals */}
        <FadeIn className="mb-24">
          <div className="bg-linen p-8 md:p-16 relative overflow-hidden border border-charcoal/5">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-almond/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-almond/10 rounded-full blur-3xl" />

            {/* Root Node */}
            <div className="relative z-10 text-center">
              <div className="inline-block bg-charcoal text-white px-6 md:px-10 py-4 font-serif text-lg md:text-2xl rounded-full shadow-lg border-4 border-white/20 relative z-20">
                You'll Learn All The Fundamentals Of Makeup Artistry:
              </div>
              {/* Vertical Line from Root - Desktop & Mobile */}
              {/* This line connects the Badge to the start of the Branches container */}
              <div className="w-0.5 h-8 bg-charcoal/20 mx-auto relative z-10" />
            </div>

            {/* Branches */}
            <div className="relative z-10">

              {/* Horizontal Connector Line (Desktop Only) */}
              {/* Spans from center of first col (16.66%) to center of last col (83.33%) */}
              <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-px bg-charcoal/20" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-0 md:pt-8">
                {fundamentals.map((branch, i) => (
                  <div key={i} className="flex flex-col items-center relative">

                    {/* Vertical Line from Horizontal Bar to Branch Node (Desktop) */}
                    {/* Connects top horizontal line (at 0) to the content start (at 2rem/pt-8) */}
                    <div className="hidden md:block absolute top-0 w-0.5 h-8 bg-charcoal/20" />

                    {/* Branch Node */}
                    <div className="bg-white border border-charcoal/10 px-6 py-3 font-serif text-lg font-semibold text-charcoal shadow-sm mb-4 w-full md:w-auto text-center relative z-20">
                      {branch.category}

                      {/* Mobile Connector (Connecting to previous sibling) */}
                      {/* Draws a line through the gap between stacked items on mobile */}
                      <div className={`md:hidden absolute left-1/2 -top-12 w-0.5 h-12 bg-charcoal/20 -translate-x-1/2 ${i === 0 ? 'hidden' : 'block'}`} />
                      {/* For the first item (i===0) on mobile, it connects directly to the Root's bottom line because there is no gap/padding */}
                    </div>

                    {/* Connector from Branch to Items */}
                    <div className="w-0.5 h-4 bg-charcoal/20 mb-4" />

                    {/* Leaf Nodes (Items) */}
                    <ul className="space-y-3 text-center w-full relative z-10 flex flex-col items-center">
                      {branch.items.map((item, j) => (
                        <li key={j} className="font-sans text-charcoal/70 font-light text-sm md:text-base px-3 py-2 bg-white/50 rounded-md border border-charcoal/5 inline-block w-auto min-w-[200px]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Outcomes Section */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl mb-4">By the End of This Program, You'll Be Able to:</h3>
            <div className="w-16 h-0.5 bg-sand mx-auto" />
          </div>

          {/* Flex layout for symmetrical centering (3 top, 2 bottom centered) */}
          <div className="flex flex-wrap justify-center gap-y-12 -mx-4">
            {outcomes.map((item, i) => (
              <div key={i} className="w-full md:w-1/3 px-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-linen flex items-center justify-center mb-4 text-charcoal">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold uppercase tracking-wider text-sm mb-2">{item.title}</h4>
                <p className="font-sans font-light text-charcoal/70 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
