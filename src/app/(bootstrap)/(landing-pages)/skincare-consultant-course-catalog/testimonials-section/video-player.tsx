import type { StaticImageData } from 'next/image';
import { forwardRef } from 'react';

import styles from './video-player.module.scss';

interface Props {
  src: string;
  poster?: StaticImageData;
  type?: string;
  onPlay?: () => void;
}

export const VideoPlayer = forwardRef<HTMLVideoElement, Props>(({ src, poster, type = 'video/mp4', onPlay }, ref) => (
  <video ref={ref} onPlay={onPlay} controls preload="auto" className={styles.video} poster={poster ? poster.src : undefined}>
    <source src={src} type={type} />
  </video>
));

VideoPlayer.displayName = 'VideoPlayer';
