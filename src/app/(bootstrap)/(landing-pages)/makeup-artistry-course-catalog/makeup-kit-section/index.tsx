import Image from 'next/image';
import type { FC } from 'react';

import MakeupKitImage from './makeup-kit-image-no-lashes.jpg';

export const MakeupKitSection: FC = () => (
  <section className="bg-black text-white">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xxl-6">
          <h2 className="h1">Bonus Luminous Makeup Kit</h2>
          <p>When you enroll in the Master Makeup Artistry Course you'll receive a gorgeous 8-piece makeup kit to help you launch your professional career!</p>
          <p className="small fst-italic">Makeup kits available while supplies last. You will receive your items once you have completed Unit A.</p>
        </div>
      </div>
      <Image src={MakeupKitImage} className="img-fluid" alt="QC Lumious kit" />
    </div>
  </section>
);
