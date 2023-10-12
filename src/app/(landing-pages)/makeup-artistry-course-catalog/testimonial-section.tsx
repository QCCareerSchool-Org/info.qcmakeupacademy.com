import type { FC } from 'react';

export const TestimonialSection: FC = () => {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h3 style={{ fontSize: 80, marginBottom: '-30px' }}>&rdquo;</h3>
            <p className="serif" style={{ fontSize: 24, lineHeight: 1.375 }}>QC takes you right back to basics, I think that's really important. It's the basic skills that everything comes back to and it's good to remind yourself of these. The recorded feedback was great, Nathan picked up on everything and you really do learn from what he says.</p>
            <p><span className="serif" style={{ fontSize: 28 }}>Charlotte Albert</span><br />Makeup Artistry Graduate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
