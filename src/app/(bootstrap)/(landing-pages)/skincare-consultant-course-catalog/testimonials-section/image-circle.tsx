import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import styles from './image-circle.module.scss';

interface Props {
  src: StaticImageData;
  alt: string;
}

export const ImageCircle: FC<Props> = ({ src, alt }) => (
  <Image className={styles.image} src={src} alt={alt} style={{ objectFit: 'cover' }} />
);
