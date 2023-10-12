'use client';

import Image from 'next/image';
import type { FC } from 'react';

import HeroImage from './hero.jpg';
import { BrochureForm } from '@/components/brochureForm';
import { BrochureWrapper } from '@/components/brochureWrapper';
import { Logo } from '@/components/logo';
import { NathanVideo } from '@/components/nathanVideo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const TopSection: FC = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <section>
      <Image src={HeroImage} placeholder="blur" alt="woman wearing red" priority fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 50%' }} />
      <div className="container">
        <Logo />
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <BrochureWrapper>
              <h1 className="h3">Get Started with a Free Course Catalog</h1>
              <BrochureForm />
              {!lgOrGreater && (
                <div className="mt-4">
                  <NathanVideo />
                </div>
              )}
            </BrochureWrapper>
          </div>
          {lgOrGreater && (
            <div className="col-12 col-lg-6">
              <NathanVideo />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
