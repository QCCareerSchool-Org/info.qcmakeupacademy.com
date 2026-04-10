import type { FC } from 'react';

import PosterImage from './poster.jpg';

const src = 'https://cdn.qccareerschool.com/makeup/course-trailers/sk.mp4';

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
