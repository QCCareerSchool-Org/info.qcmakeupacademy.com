import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './image-circle.module.scss';

type Props = {
  src: StaticImageData;
  alt: string;
};

export const ImageCircle: FC<Props> = ({ src, alt }) => (
  <Image className={styles.image} src={src} alt={alt} style={{ objectFit: 'cover' }} />
);
