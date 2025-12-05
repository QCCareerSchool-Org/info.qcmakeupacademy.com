import type { FC } from 'react';

import { CertificationSection } from './certification-section';
import { DiscountsSection } from './discounts-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialsSection } from './testimonials-section';
import { VideoSection } from './video-section';
import { getData } from '@/lib/getData';

interface Props {
  alt?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
}

export const SkincareConsultant: FC<Props> = async props => {
  const { countryCode } = await getData();

  return (
    <>
      <HeroSection alt={props.alt} gclid={props.gclid} msclkid={props.msclkid} utmSource={props.utmSource} utmMedium={props.utmMedium} utmCampaign={props.utmCampaign} utmContent={props.utmContent} utmTerm={props.utmTerm} referrer={props.referrer} countryCode={countryCode} />
      <VideoSection />
      <CertificationSection />
      <HowYourCourseWorksSection />
      <DiscountsSection />
      <TestimonialsSection />
      <StartTodaySection />
    </>
  );
};
