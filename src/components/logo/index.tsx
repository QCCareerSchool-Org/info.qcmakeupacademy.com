'use client';

import Image, { StaticImageData } from 'next/image';
import type { FC } from 'react';

import LogoImage from './qcma-logo.svg';
import { useScreenWidth } from '@/hooks/useScreenWidth';

const getImageHeight = (screenWidth: number): number => {
  if (screenWidth >= 1400) {
    return 36;
  }
  if (screenWidth >= 1200) {
    return 32;
  }
  if (screenWidth >= 992) {
    return 28;
  }
  return 52;
};

export const Logo: FC = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className="text-center mt-3 mb-5">
      <Image src={LogoImage as StaticImageData} height={getImageHeight(screenWidth)} className="img-fluid" alt="QC Makeup Academy" />
    </div>
  );
};
