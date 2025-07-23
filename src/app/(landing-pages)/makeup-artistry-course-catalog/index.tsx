import type { FC } from 'react';

import { AboutSection } from './about-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialSection } from './testimonial-section';
import { getData } from '@/lib/getData';

type Props = {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
};

export const MakeupArtistry: FC<Props> = props => {
  const { countryCode } = getData();

  return (
    <>
      <HeroSection gclid={props.gclid} msclkid={props.msclkid} utmSource={props.utmSource} utmMedium={props.utmMedium} utmCampaign={props.utmCampaign} utmContent={props.utmContent} utmTerm={props.utmTerm} referrer={props.referrer} countryCode={countryCode} />
      <HowYourCourseWorksSection />
      <TestimonialSection />
      <AboutSection />
      <StartTodaySection />
    </>
  );
};
