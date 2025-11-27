import { cookies } from 'next/headers';
import type { FC } from 'react';

import { Curriculum } from './_components/curriculum';
import { Hero } from './_components/hero';
import { Instructor } from './_components/instructor';
import { Pricing } from './_components/pricing';
import { ProblemSolution } from './_components/problemSolution';
import { Testimonials } from './_components/testimonials';

const App: FC = () => {
  const cookieStore = cookies();
  const initialSpotsCookie = cookieStore.get('spots');

  const initialSpots = typeof initialSpotsCookie === 'undefined' ? undefined : parseInt(initialSpotsCookie.value, 10);

  return (
    <>
      <Hero />
      <ProblemSolution />
      <Instructor />
      <Curriculum />
      <Testimonials />
      <Pricing initialSpots={initialSpots} />
    </>
  );
};

export default App;
