import { Check, Play, Sparkles, Star, User } from 'lucide-react';
import type { FC } from 'react';
import { memo } from 'react';

import HeroImage from './background.jpg';
import { FadeIn } from '../../../_components/fadeIn';
import { BackgroundImage } from '@/components/backgroundImage';

interface IconTitleDesc {
  icon: FC<{ className?: string }>;
  title: string;
  desc: string;
}

interface Fundamental {
  category: string;
  items: string[];
}

const methods: IconTitleDesc[] = [
  { icon: Play, title: 'Professional-level video lessons', desc: 'to follow along with and complete at your own pace' },
  { icon: Star, title: 'Real-life makeup applications', desc: 'to build up the skills and confidence to create any look' },
  { icon: User, title: 'Personalized coaching', desc: 'to create a routine that fits your life and highlights your natural beauty' },
];

const fundamentals: Fundamental[] = [
  {
    category: 'Apply a Perfect Base',
    items: [ 'Skin prep for smooth application', 'Foundation for an even complexion', 'Concealing under-eye circles', 'Hiding redness and blemishes', 'Contouring & highlighting for dimension', 'Blush placement for a natural flush', 'Reducing the appearance of fine lines' ],
  },
  {
    category: 'Enhance Your Eyes',
    items: [ 'Eyeshadow application to enhance eye shape', 'Smokey eye techniques for day or evening looks', 'Blending for soft, professional transitions', 'Eyeliner application for defined eyes', 'Brow shaping and filling for balance', 'Mascara application for lift and volume', 'False lash application for added drama' ],
  },
  {
    category: 'Shape & Define Your Lips',
    items: [ 'Lip prep for smooth, long-lasting color', 'Lip liner for precise shaping', 'Lipstick application for vibrant, even coverage', 'Lip gloss for shine and dimension', 'Layering shades for custom color', 'Balancing lip shape with facial features', 'Preventing feathering and smudging' ],
  },
];

const outcomes = [
  <><span className="font-semibold">Create your perfect everyday and evening looks in under 20 minutes</span>—confidently and without stress.</>,
  <><span className="font-semibold">Know exactly which 5 to 10 products and colors enhance your features</span>—eliminating guesswork and wasted money.</>,
  <><span className="font-semibold">Transform your everyday routine into a 5-minute self-care ritual</span>—face the day as the best version of yourself.</>,
  <><span className="font-semibold">Choose from 50+ professional techniques</span>—learn the skills to try a current trend or enhance your go-to looks</>,
];

export const Curriculum: FC = memo(() => (
  <>
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight">
            How You'll Learn: A Multi-Tiered System Designed for You
          </h2>
        </FadeIn>

        {/* Methodology Icons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
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

      </div>
    </section>

    <section className="py-24 px-6 bg-white relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <BackgroundImage src={HeroImage} mobile={{ src: HeroImage, objectPosition: '55% 50%', breakpoint: 'md' }} />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto text-white">

        {/* Mind Map Section - Fundamentals */}
        <FadeIn>

          {/* Root Node */}
          <div className="relative z-10 text-center">
            <h2 className="font-serif font-bold text-2xl lg:text-3xl relative z-20 lg:mb-4">
              Learn the Techniques to Highlight Your Best Features
            </h2>
            {/* Vertical Line from Root - Desktop & Mobile */}
            {/* This line connects the Badge to the start of the Branches container */}
            <div className="invisible lg:visible w-px h-8 bg-rose-400 mx-auto relative z-10" />
          </div>

          {/* Branches */}
          <div className="relative z-10">

            {/* Horizontal Connector Line (Desktop Only) */}
            {/* Spans from center of first col (16.66%) to center of last col (83.33%) */}
            <div className="hidden lg:block absolute top-0 left-[16.25%] right-[16.25%] h-px bg-rose-400" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-4 pt-0 lg:pt-8 justify-items-stretch">
              {fundamentals.map((f, i) => (
                <div key={i} className="flex flex-col w-full justify-self-stretch items-center">

                  {/* Vertical Line from Horizontal Bar to Branch Node (Desktop) */}
                  {/* Connects top horizontal line (at 0) to the content start (at 2rem/pt-8) */}
                  <div className="flex flex-col items-center w-full">
                    <div className="hidden lg:block absolute top-0 w-px h-8 bg-rose-400" />
                  </div>

                  <div className="w-full max-w-lg lg:max-w-none lg:flex-1 bg-stone-50 p-4 lg:py-8 relative overflow-hidden border border-charcoal/5">

                    <div className="flex flex-col items-center relative">

                      {/* Branch Node */}
                      <div className="font-serif text-lg font-semibold text-charcoal max-w-2xl text-center relative mb-4 z-20">
                        {f.category}
                      </div>

                      {/* Leaf Nodes (Items) */}
                      <ul className="list-none lg:ps-4 text-center space-y-3 w-full relative z-10 flex flex-col">
                        {f.items.map((item, j) => (
                          <li key={j} className="font-sans text-charcoal/70 font-light text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>

    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">

        {/* Outcomes Section */}
        <FadeIn delay={0.2}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl mb-4">By the End of This Program, You'll Be Able to:</h3>
            <div className="w-16 h-0.5 bg-sand mx-auto" />
          </div>

          {/* Flex layout for symmetrical centering (3 top, 2 bottom centered) */}
          <div className="flex flex-wrap justify-center gap-y-8 -mx-4 mb-16">
            {outcomes.map((o, i) => (
              <div key={i} className="w-full lg:w-1/2 px-4 flex flex-col items-center text-center">
                <Check color="rgb(32, 192, 32)" className="w-5 h-5 m-auto mb-4" />
                <p className="font-sans font-light text-charcoal/70 text-sm leading-relaxed max-w-xs mx-auto">{o}</p>
              </div>
            ))}
          </div>

          <div className="bg-linen max-w-xl pt-8 px-12 pb-12 m-auto text-center">
            <div className="inline-flex gap-x-2">
              <Sparkles className="w-5 h-5 m-auto mb-4" />
              BONUS
              <Sparkles className="w-5 h-5 m-auto mb-4" />
            </div>
            <p className="font-sans font-light text-charcoal/70 text-sm leading-relaxed">
              <span className="font-semibold">CUSTOM SKINCARE ROUTINE:</span> learn easy-to-follow steps that keep your complexion fresh and healthy with a custom skincare routine.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  </>
));

Curriculum.displayName = 'Curriculum';
