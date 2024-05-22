import { FC } from 'react';
import { BrochureForm } from '@/components/brochureForm';

export const HeroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-lg-6">
          <h2 className="h4">Get Your Free Skincare Course Catalog</h2>
          <BrochureForm action="" />
        </div>
        <div className="col-12 col-lg-6">
          <h1>Become a Professionally Certified Skincare Consultant!</h1>
          <p>Get ready to harness the booming skincare market with QC Makeup Academy's comprehensive Skincare course</p>
        </div>
      </div>
      <video src="https://a853d550d96942a102ed-03698ba952ff3c4776ee22874ecfcda2.ssl.cf1.rackcdn.com/course-trailers/sk.mp4" controls preload="metadata" style={{ width: '100%' }} />
    </div>
  </section>
);
