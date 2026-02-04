import type { FC } from 'react';

import styles from './footer.module.scss';
import { TelephoneLink } from './telephoneLink';

interface Props {
  countryCode: string;
}

export const Footer: FC<Props> = ({ countryCode }) => (
  <footer>
    <section className="bg-black text-white text-center">
      <div className="container">
        <h2 className="h3 mb-3">Have Questions? Give us a Call!</h2>
        <p className={styles.phoneNumber}><TelephoneLink countryCode={countryCode} /></p>
        <p className={`${styles.small} ${styles.muted}`}>&copy; {new Date().getFullYear()} QC Makeup Academy</p>
        <p className={styles.small}><a style={{ color: 'inherit', textDecoration: 'none' }} href="https://www.qcmakeupacademy.com/terms.html">Privacy Policy</a></p>
      </div>
      <small className={styles.reCaptchaDisclaimer}>
        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
    </section>
  </footer>
);
