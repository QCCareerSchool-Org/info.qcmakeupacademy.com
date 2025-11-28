'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import type { FC, MouseEventHandler } from 'react';
import { useState } from 'react';

import { FadeIn } from '../../../_components/fadeIn';
import NathanImage from './nathan.jpg';
import { useEscapeKey } from '@/hooks/useEscapeKey';

export const Instructor: FC = () => {
  const [ isVideoOpen, setIsVideoOpen ] = useState(false);

  useEscapeKey(() => {
    setIsVideoOpen(false);
  });

  const handleShow: MouseEventHandler = () => {
    setIsVideoOpen(true);
  };

  const handleHide: MouseEventHandler = () => {
    setIsVideoOpen(false);
  };

  return (
    <section className="py-24 md:py-32 bg-linen-dark px-6 overflow-hidden">
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close video"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative">
              <video src="https://32e10f05b345e8e8e33c-c7f4ae90fffa9b9f9644d0d7851e06ec.ssl.cf1.rackcdn.com/personal-makeup-nathan.mp4" width={1024} height={567} controls autoPlay />
            </div>

            {/* Close on background click */}
            <div className="absolute inset-0 -z-10" onClick={handleHide} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Image Stack */}
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative z-10 aspect-[3/4] w-full max-w-md mx-auto bg-charcoal p-1 cursor-pointer group" onClick={handleShow}>
            <Image src={NathanImage} className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100" alt="Nathan Johnson" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors duration-300">
              <div className="w-20 h-20 rounded-full bg-white/60 backdrop-blur-[2px] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/80">
                <Play className="w-8 h-8 text-charcoal ml-1 fill-charcoal" />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-charcoal/30 z-0 hidden md:block max-w-md mx-auto left-0 right-0 mx-0 md:left-[-24px] md:right-6" />
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
              <p>
                <span className="font-medium">Nathan believes makeup isn't about hiding flaws; it's about celebrating <em>you</em>.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
