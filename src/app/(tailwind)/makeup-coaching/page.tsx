import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import type { FC } from 'react';

import { Curriculum } from './_components/curriculum';
import { Hero } from './_components/hero';
import { Instructor } from './_components/instructor';
import { Pricing } from './_components/pricing';
import { ProblemSolution } from './_components/problemSolution';
import { Testimonials } from './_components/testimonials';
import { Header } from '../_components/header';

export const metadata: Metadata = {
  title: 'Makeup Coaching',
  alternates: { canonical: 'https://info.qcmakeupacademy.com/makeup-coaching' },
};

const MakeupCoachingPage: FC = async () => {
  const cookieStore = await cookies();
  const initialSpotsCookie = cookieStore.get('spots');

  const initialSpots = typeof initialSpotsCookie === 'undefined' ? undefined : parseInt(initialSpotsCookie.value, 10);
  const enrollmentHref = 'https://enroll.qcmakeupacademy.com/makeup-coaching-50-off';

  return (
    <>
      <Header buttonHref={enrollmentHref} />
      <Hero />
      <ProblemSolution />
      <Instructor />
      <Curriculum />
      <Testimonials />
      <Pricing buttonHref={enrollmentHref} initialSpots={initialSpots} />
    </>
  );
};

export default MakeupCoachingPage;
