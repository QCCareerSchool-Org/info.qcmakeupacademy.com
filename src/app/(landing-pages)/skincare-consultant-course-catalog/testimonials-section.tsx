import { FC } from 'react';

export const TestimonialsSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <h2>What our students and grads are saying</h2>
        <p className="mb-4">We've helped 8000+ students and grads start their own successful makeup businesses and land jobs with  high-end brands like MAC, Benefit, and Sephora!</p>
        <div className="col-12 col-lg-4">
          <p className="lead">&ldquo;QC Makeup academy was the best choice. What I enjoyed the most was that I could learn online at my own pace&hellip;&rdquo;</p>
          <p className="mb-0">Veronika Kelle<br />Makeup Professional</p>
        </div>
        <div className="col-12 col-lg-4">
          <p className="lead">&ldquo;Now, I'm confident that I have the knowledge and techniques needed for me to do my dream job for the rest of my life&hellip;&rdquo;</p>
          <p className="mb-0">Alba Carpio<br />Master Makeup Graduate</p>
        </div>
        <div className="col-12 col-lg-4">
          <p className="lead">&ldquo;Today, I run a successful business teaching people how to apply the basics of makeup&hellip;&rdquo;</p>
          <p className="mb-0">Jessica Van Ginkel<br />Makeup Professional</p>
        </div>
      </div>
    </div>
  </section>
);
