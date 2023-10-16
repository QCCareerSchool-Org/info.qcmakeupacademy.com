import { Metadata } from 'next';
import type { FC } from 'react';

import { AboutSection } from '../about-section';
import { HeroSection } from '../hero-section';
import { HowYourCourseWorksSection } from '../how-your-course-works-section';
import { MakeupKitSection } from '../makeup-kit-section';
import { StartTodaySection } from '../start-today-section';
import { TestimonialSection } from '../testimonial-section';

export const metadata: Metadata = {
  title: 'Get Started with a Free Course Catalog - QC Makeup Academy',
  description: 'Start your MUA career with our flexible online makeup classes. Download our course catalog to learn more about QC makeup school.',
};

const MakeupArtistryPage: FC = () => {
  return (
    <>
      <HeroSection variant="white" />
      <HowYourCourseWorksSection />
      <TestimonialSection />
      <AboutSection />
      <MakeupKitSection />
      <StartTodaySection />
    </>
  );
};

export default MakeupArtistryPage;
