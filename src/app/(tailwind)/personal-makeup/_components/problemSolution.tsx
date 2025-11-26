import { CheckCircle2, XCircle } from 'lucide-react';
import type { FC } from 'react';

import { FadeIn } from '../../_components/fadeIn';

export const ProblemSolution: FC = () => {
  const problems = [
    <>You're frustrated with <strong className="font-medium text-charcoal">one-size-fits-all online tutorials</strong> that feel complicated and overwhelming.</>,
    <>The makeup and skincare routines you learned in your 20s <strong className="font-medium text-charcoal">no longer fit who you are today</strong>.</>,
    <>Your <strong className="font-medium text-charcoal">self-care has been on hold</strong> while you put everyone else first, but you're ready to carve out time for yourself.</>,
    <>You've <strong className="font-medium text-charcoal">bought the products</strong>, but you don't know how to make them work for your features.</>,
    <>You want a look that <strong className="font-medium text-charcoal">demands compliments</strong>, but there's no way you're giving up your morning coffee.</>,
  ];

  const solutionItems = [
    'One-on-one guidance from celebrity makeup artist Nathan Johnson.',
    'Techniques tailored to your features and lifestyle.',
    'Practical strategies you can apply in minutes each day to look polished, radiant, and feel confident.',
  ];

  return (
    <section className="py-24 px-6 bg-white border-t border-charcoal/5">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-3xl md:text-4xl italic mb-6">This isn't just a makeup course.</h2>
            <p className="font-sans text-lg font-light text-charcoal/70">
              It's a guided, self-care program designed to help you reclaim your confidence, enhance your natural beauty, and build a routine that actually fits your life.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Problem Column */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <h3 className="font-serif text-2xl border-b border-charcoal/10 pb-4">Does This Sound Like You?</h3>
              <ul className="space-y-6">
                {problems.map((problem, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <XCircle className="w-5 h-5 text-almond mt-1 shrink-0 group-hover:text-charcoal transition-colors" />
                    <span className="font-sans font-light text-charcoal/80 leading-relaxed">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Solution Column */}
          <FadeIn delay={0.4}>
            <div className="bg-linen p-8 md:p-12 h-full border border-charcoal/5 relative flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-charcoal" />

              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-6 leading-tight text-charcoal">
                  Stop wasting time with tutorials that don't work for you. QC Makeup Academy's <strong className="font-semibold text-charcoal">Personalized Makeup Coaching Program</strong> gives you:
                </h3>

                <ul className="space-y-5 mb-8">
                  {solutionItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-charcoal mt-1 shrink-0" />
                      <span className="font-sans font-light text-charcoal/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-charcoal/10 mt-auto">
                <p className="font-sans text-charcoal/70 text-base font-light leading-relaxed">
                  With custom audio coaching from a celebrity makeup artist, you'll master makeup techniques tailored to your features and lifestyle—so you can look and feel like your best self.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
