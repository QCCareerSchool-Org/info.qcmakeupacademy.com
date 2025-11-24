import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

export const Pricing: React.FC = () => {
  const [ spots, setSpots ] = useState(20);
  const countdownRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const isInView = useInView(countdownRef, { once: true, amount: 0.3 }) as boolean;

  useEffect(() => {
    // Only start if visible
    if (!isInView) { return; }

    // Stop countdown at 15 to maintain scarcity without going to zero
    if (spots <= 15) { return; }

    // Randomize the delay: Faster now (approx 4-8 seconds)
    // Speed up by ~50% from previous settings
    const delay = Math.floor(Math.random() * 4000) + 4000;

    const timer = setTimeout(() => {
      setSpots(prev => prev - 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [ spots, isInView ]);

  const includes = [
    { item: '35 Step-by-Step Video Tutorials', value: '$300' },
    { item: 'Two Personalized Coaching Sessions', value: '$200' },
    { item: 'The 5-Minute Makeup Guide', value: '$50' },
    { item: 'Custom Product & Tool Recommendations', value: '$50' },
    { item: 'Self-Paced Masterclass + Exercises', value: '$100' },
    { item: 'Custom Skincare Analysis & Routine Builder', value: '$100' },
  ];

  return (
    <section id="pricing" className="bg-linen">
      <div className="py-24 px-6 max-w-4xl mx-auto">

        <FadeIn>
          <div className="bg-white p-8 md:p-16 shadow-2xl shadow-charcoal/5 border border-charcoal/5 relative">

            <div className="text-center mb-12">
              <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-charcoal/40">
                Exclusive Program
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-2 text-charcoal">Your Investment In Yourself</h2>
              <div className="w-12 h-0.5 bg-charcoal mx-auto mt-6" />
            </div>

            <div className="space-y-4 mb-12">
              {includes.map((inc, i) => (
                <div key={i} className="flex justify-between items-end border-b border-dashed border-charcoal/20 pb-2">
                  <span className="font-serif text-lg text-charcoal/80">{inc.item}</span>
                  <span className="font-sans text-sm text-charcoal/40 ml-4 tabular-nums">{inc.value} Value</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-4">
                <span className="font-sans font-bold text-charcoal/50 uppercase tracking-wider">Total Value</span>
                <span className="font-sans font-bold text-charcoal/50 line-through decoration-1">$850+</span>
              </div>
            </div>

            <div className="text-center bg-linen/50 p-8 mb-10 border border-charcoal/5">
              <p className="font-sans text-sm uppercase tracking-widest mb-2 text-charcoal/60">Secure Your Access For Only</p>
              <p className="font-serif text-6xl text-charcoal">$398</p>
            </div>

            <div className="space-y-4">
              <Button fullWidth variant="primary" className="text-lg py-5">
                Get Access Now
              </Button>
            </div>

            {/* Guarantee */}
            <div className="mt-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-green-50/50 border border-green-900/5 rounded-sm">
              <ShieldCheck className="w-10 h-10 text-charcoal/60 shrink-0" />
              <div className="text-center md:text-left">
                <h4 className="font-serif text-lg font-bold text-charcoal">Risk-Free Guarantee</h4>
                <p className="font-sans font-light text-sm text-charcoal/70 mt-1">
                  Try the program for 7 days. If you don't feel more confident, get a full refund—no questions asked.
                </p>
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

      {/* Bonus Scarcity / Bottom CTA - Full Width */}
      <div className="w-full bg-charcoal py-24 px-6" ref={countdownRef}>
        <FadeIn delay={0.2} className="text-center max-w-3xl mx-auto">
          <div>
            <h3 className="font-serif text-3xl md:text-4xl mb-4 text-white">Claim Your Spot Today</h3>
            <p className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-almond mb-8">
              Learn Makeup Techniques Designed for You
            </p>

            <div className="space-y-6 text-lg font-sans font-light leading-relaxed text-white/90 mb-10">
              <p>
                The next
                <span className="inline-block relative w-[2.5ch] h-[1.3em] align-bottom mx-1 overflow-hidden translate-y-[0.15em]">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.span
                      key={spots}
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeInOut' }}
                      className="absolute inset-0 flex justify-center items-center font-bold text-white tabular-nums"
                    >
                      {spots}
                    </motion.span>
                  </AnimatePresence>
                </span>
                students will receive Nathan's <strong className="text-white font-bold">Personal Guide to Youthful-Looking Skin</strong>, a curated roadmap of skincare and makeup essentials designed for your features and style.
              </p>
              <p className="text-white/70 text-base md:text-lg">
                Learn personalized techniques from a celebrity makeup artist and turn your daily routine into a quick, empowering self-care ritual that leaves you feeling polished, radiant, and like yourself again.
              </p>
            </div>

            <Button variant="white" className="px-12 py-4 text-lg w-full md:w-auto border-transparent hover:border-white/20">
              Start Today
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
