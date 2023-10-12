import { FC } from 'react';

import PosterImage from './poster-with-play-button.jpg';

const src = 'https://a853d550d96942a102ed-03698ba952ff3c4776ee22874ecfcda2.ssl.cf1.rackcdn.com/download-the-course-catalog.mp4';

export const NathanVideo: FC = () => (
  <video poster={PosterImage.src} preload="auto" controls style={{ width: '100%' }}>
    <source src={src} type="video/mp4" />
  </video>
);
