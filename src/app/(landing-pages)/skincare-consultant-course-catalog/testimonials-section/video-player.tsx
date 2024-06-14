import { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './video-player.module.scss';

type Props = {
  src: string;
  poster?: StaticImageData;
  type?: string;
};

export const VideoPlayer: FC<Props> = ({ src, poster, type = 'video/mp4' }) => (
  <video style={{ aspectRatio: 'auto 1280 / 720' }} controls preload="auto" className={styles.video} poster={poster ? poster.src : undefined}>
    <source src={src} type={type} />
  </video>
);
