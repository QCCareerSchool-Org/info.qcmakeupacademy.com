import type { FC } from 'react';

import styles from './footer.module.scss';
import { TelephoneLink } from './telephoneLink';

export const Footer: FC = () => (
  <footer>
    <section className="bg-black text-white">
      <div className="container text-center">
        <h2 className="h3 mb-3">Have Questions? Give us a Call!</h2>
        <p className={styles.phoneNumber}><TelephoneLink /></p>
        <p className={`${styles.small} ${styles.muted}`}>&copy; {new Date().getFullYear()} QC Makeup Academy</p>
        <p className={styles.small}><a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.qcmakeupacademy.com/terms.html">Privacy Policy</a></p>
      </div>
    </section>
  </footer>
);
