import { FC } from 'react';

import { FormWrapper } from './form-wrapper';
import HeroImage from './hero-reversed.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrevoForm } from '@/components/brevoForm';

type Props = {
  alt?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  referrer: string | null;
  countryCode?: string;
};

const brevoListId = 9;
const brevoEmailTemplateId = 821;

export const HeroSection: FC<Props> = props => (
  <section className="text-white">
    <BackgroundImage src={HeroImage} objectPosition="50% 0%" mobile={{ breakpoint: 'lg', src: HeroImage, objectPosition: '100% 50%' }} priority />
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-4 mb-lg-0">
          <FormWrapper alt={props.alt}>
            <h2 className="h4">Get Your Free Skincare Course Catalog</h2>
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
              countryCode={props.countryCode}
            />
          </FormWrapper>
        </div>
        <div className="col-12 col-lg-6 col-xxl-5 text-center text-lg-start">
          <h1>Become a Professionally Certified Skincare Consultant!</h1>
          <p>Get ready to harness the booming skincare market with QC Makeup Academy's comprehensive Skincare course</p>
        </div>
      </div>
    </div>
  </section>
);
