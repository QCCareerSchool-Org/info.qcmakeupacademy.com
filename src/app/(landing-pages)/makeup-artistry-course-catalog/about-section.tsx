import Image from 'next/image';
import { FC } from 'react';

import Ladies from './about-image.jpg';

export const AboutSection: FC = () => (
  <section>
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="d-none d-lg-block col-12 col-sm-8 col-lg-5 mb-4 mb-lg-0">
          <Image src={Ladies} className="img-fluid" style={{ width: '100%' }} alt="ladies wearing red" />
        </div>
        <div className="col-12 col-md-8 col-lg-5 text-center text-lg-start">
          <h2 className="h1">About QC Makeup Academy</h2>
          <p className="mb-0">With QC's online makeup artistry classes, you'll receive professional training from industry professionals. Through video tutorials, celebrity makeup artist, Nathan Johnson, will teach you makeup techniques step by step. You'll also have a personal tutor to guide you through your course(s). You'll benefit from regular one-on-one instruction and access to help from our Student Support Team whenever you need it.</p>
        </div>
      </div>
    </div>
  </section>
);
