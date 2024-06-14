import { FC } from 'react';

import { ImageCircle } from './image-circle';
import AlbaPoster from './poster-alba.jpg';
import JessicaPoster from './poster-jessica.jpg';
import VeronikaPoster from './poster-veronika.jpg';
import AlbaThumbnail from './thumbnail-alba.jpg';
import JessicaThumbnail from './thumbnail-jessica.jpg';
import VeronikaThumbnail from './thumbnail-veronika.jpg';
import { VideoPlayer } from './video-player';

export const TestimonialsSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center mb-4 mb-lg-5">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
          <h2 className="mb-3 mb-lg-4">What our students and grads are saying</h2>
          <p className="lead mb-0">We've helped 8000+ students and grads start their own successful makeup businesses and land jobs with  high-end brands like MAC, Benefit, and Sephora!</p>
        </div>
      </div>
      <div className="row justify-content-center g-5">
        <div className="col-12 col-sm-10 col-md-8 col-lg-4">
          <div className="mb-3">
            <VideoPlayer src="https://32e10f05b345e8e8e33c-c7f4ae90fffa9b9f9644d0d7851e06ec.ssl.cf1.rackcdn.com/testimonial-veronika.mp4" poster={VeronikaPoster} />
          </div>
          <p className="lead mb-3">&ldquo;QC Makeup academy was the best choice. What I enjoyed the most was that I could learn online at my own pace&hellip;&rdquo;</p>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <ImageCircle src={VeronikaThumbnail} alt="Veronika Kelle" />
            </div>
            <p className="mb-0"><span className="lead">Veronika Kelle</span><br />Makeup Professional</p>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-4">
          <div className="mb-3">
            <VideoPlayer src="https://32e10f05b345e8e8e33c-c7f4ae90fffa9b9f9644d0d7851e06ec.ssl.cf1.rackcdn.com/testimonial-alba.mp4" poster={AlbaPoster} />
          </div>
          <p className="lead mb-3">&ldquo;Now, I'm confident that I have the knowledge and techniques needed for me to do my dream job for the rest of my life&hellip;&rdquo;</p>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <ImageCircle src={AlbaThumbnail} alt="Alba Carpio" />
            </div>
            <p className="mb-0"><span className="lead">Alba Carpio</span><br />Master Makeup Graduate</p>
          </div>
        </div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-4">
          <div className="mb-3">
            <VideoPlayer src="https://32e10f05b345e8e8e33c-c7f4ae90fffa9b9f9644d0d7851e06ec.ssl.cf1.rackcdn.com/testimonial-jessica.mp4" poster={JessicaPoster} />
          </div>
          <p className="lead mb-3">&ldquo;Today, I run a successful business teaching people how to apply the basics of makeup&hellip;&rdquo;</p>
          <div className="d-flex align-items-center">
            <div className="me-3">
              <ImageCircle src={JessicaThumbnail} alt="Jessica Van Ginkel" />
            </div>
            <p className="mb-0"><span className="lead">Jessica Van Ginkel</span><br />Makeup Professional</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
