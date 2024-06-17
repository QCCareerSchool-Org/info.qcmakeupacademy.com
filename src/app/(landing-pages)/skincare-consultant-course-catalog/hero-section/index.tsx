import { FC } from 'react';

import { FormWrapper } from './form-wrapper';
import HeroImage from './hero-reversed.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import { BrochureForm } from '@/components/brochureForm';

type Props = {
  alt?: boolean;
};

const action = 'http://go.qcmakeupacademy.com/l/947642/2024-06-17/x31bx';

export const HeroSection: FC<Props> = ({ alt }) => (
  <section className="text-white">
    <BackgroundImage desktopSrc={HeroImage} desktopObjectPosition="50% 0%" mobileSrc={HeroImage} mobileObjectPosition="100% 50%" priority />
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 mb-4 mb-lg-0">
          <FormWrapper alt={alt}>
            <h2 className="h4">Get Your Free Skincare Course Catalog</h2>
            <BrochureForm action={action} />
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
