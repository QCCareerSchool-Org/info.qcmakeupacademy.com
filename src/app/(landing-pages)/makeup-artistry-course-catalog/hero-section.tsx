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

type Props = {
  variant?: 'black' | 'white';
};

export const HeroSection: FC<Props> = ({ variant }) => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;

  return (
    <section style={{ backgroundColor: '#86081c' }}>
      {lgOrGreater
        ? <div className="d-none d-lg-block"><Image src={HeroImage} placeholder="blur" alt="" priority fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 30%' }} /></div>
        : <div className="d-lg-none"><Image src={HeroMobileImage} placeholder="blur" alt="" priority fill sizes="100vw" style={{ objectFit: 'cover', objectPosition: '50% 0%' }} /></div>
      }
      <div className="container">
        <HeaderLogo />
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <BrochureWrapper variant={variant}>
              <h1 className="h3">Get Started with a Free Course Catalog</h1>
              <BrochureForm action="https://captcha.qccareerschool.com/ba0593c9-3b5c-11ed-a5a8-bc764e017ab0" />
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
