'use client';

import type { FC } from 'react';
import { BiBookAlt } from 'react-icons/bi';
import { BsMegaphone } from 'react-icons/bs';
import { GrCertificate } from 'react-icons/gr';

import { useScreenWidth } from '@/hooks/useScreenWidth';

const iconSize = 36;

export const HowYourCourseWorksSection: FC = () => {
  const screenWidth = useScreenWidth();

  const lgOrGreater = screenWidth >= 992;
  const xlOrGreater = screenWidth >= 1200;

  return (
    <section>
      <div className="container text-center">
        <h2 className="h1 mb-5">How Your Course Works</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-4 mb-5 mb-lg-0">
            <div className="mb-3">
              <BiBookAlt size={iconSize} />
            </div>
            <h3>Enroll Online &amp; Access Your{xlOrGreater ? <br /> : ' '}Course Materials</h3>
            <span>Once you're a member of the QC family, you'll have lifetime access to all the tools and resources available to QC students. This includes discounts on industry products and so much more! You'll receive online access to your materials in 48 hours.</span>
          </div>
          <div className="col-12 col-md-10 col-lg-4 mb-5 mb-lg-0">
            <div className="mb-3">
              <BsMegaphone size={iconSize} />
            </div>
            <h3>Complete Assignment &amp;{lgOrGreater ? <br /> : ' '}Receive Feedback</h3>
            <span>Complete your assignments and upload them to the Online Student Center. Your tutor will review your work and provide you with a grade along with detailed audio feedback. You'll review your tutor's advice to improve your skills for the next unit.</span>
          </div>
          <div className="col-12 col-md-10 col-lg-4">
            <div className="mb-3">
              <GrCertificate size={iconSize} />
            </div>
            <h3>Graduate &amp; Become a{lgOrGreater ? <br /> : ' '}Certified Skincare Consultant</h3>
            <span>Once you complete your assignments and have graduated from your course, you'll receive your Skincare Consultant certification! You'll have lifetime access to course materials, as well as a 50% off enrollment discount for all additional courses.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
