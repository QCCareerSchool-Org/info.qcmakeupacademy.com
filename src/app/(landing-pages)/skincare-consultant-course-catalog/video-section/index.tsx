import { FC } from 'react';

import PosterImage from './poster.jpg';

const src = 'https://a853d550d96942a102ed-03698ba952ff3c4776ee22874ecfcda2.ssl.cf1.rackcdn.com/course-trailers/sk.mp4';

export const VideoSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-xl-10">
          <video poster={PosterImage.src} preload="metadata" controls style={{ width: '100%' }}>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
);
