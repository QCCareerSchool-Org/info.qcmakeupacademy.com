import Link from 'next/link';
import type { FC } from 'react';

export const StartTodaySection: FC = () => (
  <section>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <h2 className="h1">Start Your Career Today!</h2>
          <p>Request a free course catalog today to learn more about how you can become a professional skincare consultant with QC's online training! The catalog includes course curriculum, tuition information, and your career outlook.</p>
          <Link href="#"><button className="btn btn-primary btn-lg">Download Catalog</button></Link>
        </div>
      </div>
    </div>
  </section>
);
