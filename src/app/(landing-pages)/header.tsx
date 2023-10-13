'use client';

import Link from 'next/link';
import type { FC } from 'react';

import styles from './header.module.scss';
import { Logo } from '@/components/logo';
import { useScreenWidth } from '@/hooks/useScreenWidth';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const getVisible = (screenWidth: number, scrollPosition: number): boolean => {
  if (screenWidth >= 1400) {
    return scrollPosition >= 400;
  }
  if (screenWidth >= 1200) {
    return scrollPosition >= 400;
  }
  if (screenWidth >= 992) {
    return scrollPosition >= 400;
  }
  if (screenWidth >= 768) {
    return scrollPosition >= 450;
  }
  if (screenWidth >= 576) {
    return scrollPosition >= 800;
  }
  return scrollPosition >= 800;
};

export const Header: FC = () => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();

  const visible = getVisible(screenWidth, scrollPosition);

  return (
    <header className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
      <div className="container">
        <div className="d-flex justify-content-between">
          {screenWidth >= 400 && <Logo height={18} />}
          <Link href="#"><button className="btn btn-primary btn-sm py-2">Get the Catalog</button></Link>
        </div>
      </div>
    </header>
  );
};
