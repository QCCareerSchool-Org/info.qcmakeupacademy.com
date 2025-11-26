import Image from 'next/image';
import { FC } from 'react';

import styles from './index.module.scss';
import CertificationDesktopImage from './sk-certification-desktop-2.jpg';
import CertificationMobileImage from './sk-certification-mobile.jpg';

export const CertificationSection: FC = () => (
  <section className={`bg-black text-white ${styles.section}`}>
    <div className="d-none d-lg-block">
      <Image src={CertificationDesktopImage} placeholder="blur" alt="" fill sizes="100vw" style={{ objectFit: 'contain', objectPosition: '20% 50%' }} />
    </div>
    <div className="container">
      <div className="row align-items-center justify-content-center justify-content-lg-end">
        <div className="col-12 col-sm-9 col-md-6 d-lg-none mb-4 mb-lg-0">
          <Image src={CertificationMobileImage} style={{ width: '100%', height: 'auto' }} alt="" />
        </div>
        <div className="col-12 col-lg-6 col-xl-5">
          <h2>QC's Professional Skincare Consultant Certification</h2>
          <p className="mb-0">Once you graduate from your online skincare course, you'll receive a professional, internationally-recognized International Skincare Consulting Professional certificate. The ISCP certification is recognized as an official certificate to grow your career in bridal, freelance, professional beauty stores, and more!</p>
        </div>
      </div>
    </div>
  </section>
);
