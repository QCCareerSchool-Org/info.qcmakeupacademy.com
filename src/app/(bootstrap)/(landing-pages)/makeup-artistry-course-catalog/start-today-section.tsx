'use client';

import type { FC } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export const StartTodaySection: FC = () => (
  <section className="bg-light">
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <h2 className="h1">Start Your Career Today!</h2>
          <p>Request a free course catalog today to learn more about how you can become a professional makeup artist with QC's online training! The catalog includes course curriculum, tuition information, and your career outlook.</p>
          <ScrollLink smooth to="top"><button className="btn btn-primary btn-lg">Download Catalog</button></ScrollLink>
        </div>
      </div>
    </div>
  </section>
);
