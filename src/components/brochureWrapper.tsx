import type { FC, PropsWithChildren } from 'react';

import styles from './brochureWrapper.module.scss';

export const BrochureWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={`card text-white ${styles.wrapper}`}>
    <div className="card-body p-4">
      {children}
    </div>
  </div>
);
