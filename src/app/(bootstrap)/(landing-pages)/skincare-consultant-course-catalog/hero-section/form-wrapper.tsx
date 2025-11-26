import { FC, PropsWithChildren } from 'react';

import styles from './form-wrapper.module.scss';

type Props = {
  alt?: boolean;
};

export const FormWrapper: FC<PropsWithChildren<Props>> = props => {
  return <div className={`${styles.formWrapper} ${props.alt ? styles.white : styles.black}`}>{props.children}</div>;
};
