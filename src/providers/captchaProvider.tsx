'use client';

import { FC, PropsWithChildren } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

type Props = {
  key: string;
};

export const CaptchaProvider: FC<PropsWithChildren<Props>> = ({ key, children }) => (
  <GoogleReCaptchaProvider reCaptchaKey={key}>
    {children}
  </GoogleReCaptchaProvider>
);
