import type { FC } from 'react';
import { FadeIn } from './FadeIn';

export const Testimonials: FC = () => {
  const reviews = [
    {
      text: "Nathan was an amazing teacher. My journey is just beginning and I can't wait to see what comes next!",
      author: 'Carolyn W.',
    },
    {
      text: 'QC Makeup Academy has shown me how to enhance the beauty that we all have!',
      author: 'Violeta G.',
    },
    {
      text: 'Nathan is incredibly encouraging. He goes above & beyond. Makeup has become my self-care.',
      author: 'Isabella S.',
    },
  ];

  return (
    <section className="py-24 bg-charcoal text-linen-dark px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Stories of Confidence</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-charcoal-light/30 p-8 border border-white/10 flex flex-col justify-between">
              <div className="mb-6">
                {/* Stars placeholder */}
                <div className="flex gap-1 text-almond mb-4">
                  {[ 1, 2, 3, 4, 5 ].map(n => <span key={n}>★</span>)}
                </div>
                <p className="font-serif text-lg italic leading-relaxed text-white/90">
                  &ldquo;{review.text}&lrquo;
                </p>
              </div>
              <p className="font-sans text-xs tracking-widest uppercase text-almond">
                — {review.author}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
