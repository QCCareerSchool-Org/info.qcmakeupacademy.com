'use client';

import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { Element as ScrollElement, Link as ScrollLink } from 'react-scroll';

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

interface Props {
  buttonHref?: string;
  buttonContent?: ReactNode | string;
}

export const Header: FC<Props> = ({ buttonHref, buttonContent = 'Get the Catalog' }) => {
  const screenWidth = useScreenWidth();
  const scrollPosition = useScrollPosition();

  const visible = getVisible(screenWidth, scrollPosition);

  return (
    <ScrollElement name="top">
      <header className={`${styles.header} ${visible ? styles.headerVisible : ''}`}>
        <div className="container">
          <div className="d-flex justify-content-between">
            {screenWidth >= 400 && <Logo height={18} />}
            {buttonHref
              ? <Link href="#"><button className="btn btn-primary btn-sm py-2 rounded-0">{buttonContent}</button></Link>
              : <ScrollLink smooth duration={300} to="top"><button className="btn btn-primary btn-sm py-2 rounded-0">{buttonContent}</button></ScrollLink>
            }
          </div>
        </div>
      </header>
    </ScrollElement>
  );
};
