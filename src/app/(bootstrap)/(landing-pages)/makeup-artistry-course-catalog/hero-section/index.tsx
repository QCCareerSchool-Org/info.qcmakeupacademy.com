'use client';

import type { FC } from 'react';

import HeroImage from './desktop.jpg';
import HeroMobileImage from './mobile.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';
import { BrochureWrapper } from '@/components/brochureWrapper';
import { HeaderLogo } from '@/components/headerLogo';
import { NathanVideo } from '@/components/nathanVideo';
import { useScreenWidth } from '@/hooks/useScreenWidth';

interface Props {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
  countryCode: string | null;
}

const brevoListId = 9;
const brevoEmailTemplateId = 821;

export const HeroSection: FC<Props> = props => {
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
              <BrevoForm
                successLocation={`${process.env.NEXT_PUBLIC_HOST ?? 'https://www.qcmakeupacademy.com'}/thank-you-learn-makeup-online`}
                listId={brevoListId}
                emailTemplateId={brevoEmailTemplateId}
                gclid={props.gclid}
                msclkid={props.msclkid}
                utmSource={props.utmSource}
                utmMedium={props.utmMedium}
                utmCampaign={props.utmCampaign}
                utmContent={props.utmContent}
                utmTerm={props.utmTerm}
                placeholders
                referrer={props.referrer}
                telephoneListId={59}
                countryCode={props.countryCode}
              />
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
