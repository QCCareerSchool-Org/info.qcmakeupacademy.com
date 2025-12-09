'use client';

import type { FC, PropsWithChildren } from 'react';

import HeroImage from './desktop.jpg';
import HeroMobileImage from './mobile.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrochureWrapper } from '@/components/brochureWrapper';
import { HeaderLogo } from '@/components/headerLogo';
import { NathanVideo } from '@/components/nathanVideo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

export const HeroSection: FC<PropsWithChildren> = ({ children }) => {
  const screenWidth = useScreenWidth();
  const lgOrGreater = screenWidth >= 992;

  return (
    <section style={{ backgroundColor: '#86081c' }}>
      <BackgroundImage src={HeroImage} objectPosition="50% 30%" mobile={{ breakpoint: 'lg', src: HeroMobileImage, objectPosition: '50% 0%' }} priority />
      <div className="container">
        <HeaderLogo />
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <BrochureWrapper>
              <h1 className="h3">Get Started with a Free Course Catalog</h1>
              {children}
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
