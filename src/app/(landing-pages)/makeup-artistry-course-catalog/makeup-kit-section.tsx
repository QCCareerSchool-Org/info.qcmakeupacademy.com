import Image from 'next/image';
import { FC } from 'react';

import MakeupKitImage from './luminous-kit.jpg';

export const MakeupKitSection: FC = () => (
  <section className="bg-black text-white">
    <div className="container text-center">
      <h2 className="h1">Bonus Luminous Makeup Kit</h2>
      <p>When you enroll in the Master Makeup Artistry Course you'll receive a gorgeous 10-piece makeup kit to help you launch your professional career!</p>
      <p className="small fst-italic">Makeup kits available while supplies last. You will receive your items once you have completed Unit A.</p>
      <Image src={MakeupKitImage} className="img-fluid" alt="QC Lumious kit" />
    </div>
  </section>
);
