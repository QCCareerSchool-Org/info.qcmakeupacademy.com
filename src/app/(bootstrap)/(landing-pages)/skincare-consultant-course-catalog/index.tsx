import type { FC } from 'react';

import { CertificationSection } from './certification-section';
import { DiscountsSection } from './discounts-section';
import { HeroSection } from './hero-section';
import { HowYourCourseWorksSection } from './how-your-course-works-section';
import { StartTodaySection } from './start-today-section';
import { TestimonialsSection } from './testimonials-section';
import { VideoSection } from './video-section';
import { BrevoForm } from '@/components/brevoForm';
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

const brevoListId = 9;
const brevoEmailTemplateId = 821;

export const SkincareConsultant: FC<Props> = async props => {
  const { countryCode } = await getData();

  return (
    <>
      <HeroSection alt={props.alt}>
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
          countryCode={countryCode}
        />
      </HeroSection>
      <VideoSection />
      <CertificationSection />
      <HowYourCourseWorksSection />
      <DiscountsSection />
      <TestimonialsSection />
      <StartTodaySection />
    </>
  );
};
