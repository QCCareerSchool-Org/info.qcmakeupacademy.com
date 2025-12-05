import Image from 'next/image';
import type { FC } from 'react';

import { AboutSection } from './about-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import KitImage from './luminous-collection-on-white-2.jpg';
import { StartTodaySection } from './start-today-section';
import { TestimonialSection } from './testimonial-section';
import { getData } from '@/lib/getData';

interface Props {
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
}

export const MakeupArtistry: FC<Props> = async props => {
  const { countryCode } = await getData();

  return (
    <>
      <HeroSection gclid={props.gclid} msclkid={props.msclkid} utmSource={props.utmSource} utmMedium={props.utmMedium} utmCampaign={props.utmCampaign} utmContent={props.utmContent} utmTerm={props.utmTerm} referrer={props.referrer} countryCode={countryCode} />
      <section>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h2 className="h1">Bonus Makeup Kit<br />The Luminous Collection</h2>
              <p className="lead mb-4">Pro training deserves pro tools.  Get the Luminous Collection makeup kit free when you enroll in Master Makeup Artistry.</p>
              <Image src={KitImage} className="img-fluid" alt="Free makeup kit" />
              <p className="mb-0">The Luminous Makeup Kit is designed to support your journey from student to artist, with high-quality, ultra-soft brushes and a range of versatile palettes for eyes, lips, contouring, and more. It's the perfect starting point to begin building your professional makeup kit and creating flawless looks with confidence.</p>
            </div>
          </div>
        </div>
      </section>
      <HowYourCourseWorksSection className="bg-light" />
      <TestimonialSection />
      <AboutSection />
      <StartTodaySection />
    </>
  );
};
