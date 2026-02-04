import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { IPProvider } from './ipProvider';
import { ScreenWidthProvider } from './screenWidth';
import { ScrollPositionProvider } from './scrollPosition';
import { UserValuesProvider } from './userValuesProvider';
import type { UserValues } from '@/domain/userValues';

const reCaptchaKey = process.env.RECAPTCHA_KEY;

interface Props {
  userValues?: UserValues;
  clientIp: string | null;
}

export const Providers: FC<PropsWithChildren<Props>> = ({ children, userValues, clientIp }) => (
  <UserValuesProvider {...userValues}>
    <IPProvider clientIp={clientIp}>
      <ScreenWidthProvider>
        <ScrollPositionProvider>
          <CaptchaProvider reCaptchaKey={reCaptchaKey}>
            {children}
          </CaptchaProvider>
        </ScrollPositionProvider>
      </ScreenWidthProvider>
    </IPProvider>
  </UserValuesProvider>
);
