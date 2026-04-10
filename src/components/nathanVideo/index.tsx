import type { FC } from 'react';

import PosterImage from './poster.jpg';

const src = 'https://cdn.qccareerschool.com/makeup/master-makeup-artistry/download-the-course-catalog.mp4';

export const NathanVideo: FC = () => (
  <video poster={PosterImage.src} preload="metadata" controls style={{ width: '100%' }}>
    <source src={src} type="video/mp4" />
  </video>
);
