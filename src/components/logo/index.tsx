import Image, { StaticImageData } from 'next/image';
import type { FC } from 'react';

import LogoImage from './qcma-logo.svg';

type Props = {
  height: number;
};

export const Logo: FC<Props> = ({ height }) => <Image src={LogoImage as StaticImageData} height={height} className="img-fluid" alt="QC Makeup Academy" />;
