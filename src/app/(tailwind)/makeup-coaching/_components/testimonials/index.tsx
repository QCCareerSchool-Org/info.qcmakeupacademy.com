import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { type FC, memo } from 'react';

import HeroImage from './background.jpg';
import CarolynWImage from './carolyn-w.jpg';
import IsabellaSImage from './isabella-s.jpg';
import VioletaGImage from './violeta-g.jpg';
import { FadeIn } from '../../../_components/fadeIn';
import { BackgroundImage } from '@/components/backgroundImage';

export interface Testimonial {
  text: string;
  author: string;
  imageSrc: StaticImageData;
}

const reviews: Testimonial[] = [
  {
    text: "Nathan was an amazing teacher and I'm so grateful for the lessons he taught me and his encouragement. My journey is just beginning and I can't wait to see what comes next!",
    author: 'Carolyn W.',
    imageSrc: CarolynWImage,
  },
  {
    text: 'QC Makeup Academy has shown me how to enhance the beauty that we all have!',
    author: 'Violeta G.',
    imageSrc: VioletaGImage,
  },
  {
    text: 'Nathan is incredibly encouraging. He goes above & beyond to lift me up and remind me to never give up. Makeup has become my self-care.',
    author: 'Isabella S.',
    imageSrc: IsabellaSImage,
  },
];

export const Testimonials: FC = memo(() => (
  <section className="py-24 bg-charcoal text-linen-dark px-6 relative">
    <BackgroundImage src={HeroImage} />
    <div className="max-w-6xl mx-auto relative">
      <FadeIn className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-white">Testimonials</h2>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <FadeIn key={i} delay={i * 0.1} className="bg-charcoal/95 p-8 border border-white/10 flex flex-col justify-between">
            <div className="mb-6">
              {/* Stars placeholder */}
              <div className="flex gap-1 text-yellow-100 mb-4">
                {[ 1, 2, 3, 4, 5 ].map(n => <span key={n}>★</span>)}
              </div>
              <p className="text-lg italic leading-relaxed text-white/90">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
            <p className="font-sans text-xs tracking-widest uppercase text-yellow-100 flex items-center">
              <Image src={review.imageSrc} alt={review.author} className="h-16 w-16 rounded-full overflow-hidden me-4" />
              {review.author}
            </p>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
));

Testimonials.displayName = 'Testimonials';
