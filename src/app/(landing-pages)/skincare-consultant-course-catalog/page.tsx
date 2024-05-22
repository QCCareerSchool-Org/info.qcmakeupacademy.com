import { Metadata } from 'next';
import type { FC } from 'react';
import { CertificationSection } from './certification-section';
import { DiscountsSection } from './discounts-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialsSection } from './testimonials-section';

export const metadata: Metadata = {
  title: 'Get Started with a Skincare Consultant Course Catalog - QC Makeup Academy',
  description: 'Start your skincare consultant career with our flexible online classes. Download our course catalog to learn more about QC makeup school.',
};

const SkincareConsultantPage: FC = () => {
  return (
    <>
      <HeroSection />
      <CertificationSection />
      <HowYourCourseWorksSection />
      <DiscountsSection />
      <TestimonialsSection />
      <StartTodaySection />
    </>
  );
};

export default SkincareConsultantPage;
