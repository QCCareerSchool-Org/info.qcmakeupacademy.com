import Image from 'next/image';
import type { FC } from 'react';

import TestimonialImage from './testimonial-image.jpg';
import { Testimonial } from '@/components/testimonial';

export const TestimonialSection: FC = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-s mb-lg-0">
            <Testimonial
              text="QC takes you right back to basics, I think that's really important. It's the basic skills that everything comes back to and it's good to remind yourself of these. The recorded feedback was great, Nathan picked up on everything and you really do learn from what he says."
              name="Charlotte Albert"
              title="Makeup Artistry Graduate"
            />
          </div>
          <div className="col-12 col-lg-6 text-align-center">
            <div className="d-flex justify-content-center">
              <Image src={TestimonialImage} className="img-fluid" style={{ maxWidth: 400 }} alt="Master International Makeup Profesional™" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
