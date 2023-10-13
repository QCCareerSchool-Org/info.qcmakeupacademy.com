'use client';

import type { FC } from 'react';

import { Logo } from './logo';
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
  return 28;
};

export const HeaderLogo: FC = () => {
  const screenWidth = useScreenWidth();

  return (
    <div className="text-center mb-s">
      <Logo height={getImageHeight(screenWidth)} />
    </div>
  );
};
