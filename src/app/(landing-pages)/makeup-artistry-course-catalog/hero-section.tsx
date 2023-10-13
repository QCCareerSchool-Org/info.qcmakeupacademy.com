'use client';

import Image from 'next/image';
import type { FC } from 'react';

import HeroMobileImage from './hero-mobile.jpg';
import HeroImage from './hero.jpg';
import { BrochureForm } from '@/components/brochureForm';
import { BrochureWrapper } from '@/components/brochureWrapper';
import { HeaderLogo } from '@/components/headerLogo';
import { NathanVideo } from '@/components/nathanVideo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const HeroSection: FC = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <section style={{ backgroundColor: '#a0192a' }}>
      {lgOrGreater
        ? <div className="d-none d-lg-block"><Image src={HeroImage} placeholder="blur" alt="woman wearing red" priority fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 30%' }} /></div>
        : <div className="d-lg-none"><Image src={HeroMobileImage} placeholder="blur" alt="woman wearing red" priority fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 0%' }} /></div>
      }
      <div className="container">
        <HeaderLogo />
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <BrochureWrapper>
              <h1 className="h4">Get Started with a Free Course Catalog</h1>
              <BrochureForm />
              {!lgOrGreater && (
                <div className="d-lg-none mt-4">
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
