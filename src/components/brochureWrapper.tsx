import type { FC, PropsWithChildren } from 'react';

import styles from './brochureWrapper.module.scss';

type Props = {
  variant?: 'black' | 'white';
};

export const BrochureWrapper: FC<PropsWithChildren<Props>> = ({ variant = 'black', children }) => (
  <div className={`card ${styles.wrapper} ${variant === 'white' ? styles.white : styles.black}`}>
    <div className="card-body p-4">
      {children}
    </div>
  </div>
);
