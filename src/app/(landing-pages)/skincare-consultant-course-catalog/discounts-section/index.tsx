import Image from 'next/image';
import { FC } from 'react';

import DiscountsImage from './discounts.jpg';

export const DiscountsSection: FC = () => (
  <section className="bg-black text-white pb-0">
    <div className="container text-center">
      <h2 className="mb-4">Stock up with professional beauty discounts</h2>
      <p className="mb-4">We love to help students and grads succeed! Once you're enrolled in our online skincare course (and even after you graduate) you'll be eligible to take advantage of exclusive professional discounts offered by our preferred beauty partners.</p>
      <Image src={DiscountsImage} alt="" style={{ width: '100%', height: 'auto' }} />
    </div>
  </section>
);
