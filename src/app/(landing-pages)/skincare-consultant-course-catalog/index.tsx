import type { FC } from 'react';

import { CertificationSection } from './certification-section';
import { DiscountsSection } from './discounts-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialsSection } from './testimonials-section';
import { VideoSection } from './video-section';

type Props = {
  alt?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export const SkincareConsultant: FC<Props> = props => {
  return (
    <>
      <HeroSection alt={props.alt} />
      <VideoSection />
      <CertificationSection />
      <HowYourCourseWorksSection />
      <DiscountsSection />
      <TestimonialsSection />
      <StartTodaySection />
    </>
  );
};
