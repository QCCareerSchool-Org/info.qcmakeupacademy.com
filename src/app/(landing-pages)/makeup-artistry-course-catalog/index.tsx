import type { FC } from 'react';

import { AboutSection } from './about-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { MakeupKitSection } from './makeup-kit-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialSection } from './testimonial-section';

type Props = {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
};

export const MakeupArtistry: FC<Props> = () => {
  return (
    <>
      <HeroSection />
      <HowYourCourseWorksSection />
      <TestimonialSection />
      <AboutSection />
      <MakeupKitSection />
      <StartTodaySection />
    </>
  );
};
