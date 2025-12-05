import type { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';
import type { FC, PropsWithChildren } from 'react';

import { CaptchaProvider } from './captchaProvider';
import { GeoLocationProvider } from './geoLocation';
import { ScreenWidthProvider } from './screenWidth';
import { ScrollPositionProvider } from './scrollPosition';
import type { GeoLocation } from '../lib/geoLocation';
import { isGeoLocation } from '../lib/geoLocation';

const getCookieGeoLocation = (cookieStore: ReadonlyRequestCookies): GeoLocation | undefined => {
  const cookieValue = cookieStore.get('location');
  if (cookieValue && isGeoLocation(cookieValue.value)) {
    return cookieValue.value;
  }
};

const reCaptchaKey = process.env.RECAPTCHA_KEY;

export const Providers: FC<PropsWithChildren> = async ({ children }) => {
  const cookieStore = await cookies();
  const cookieGeoLocation = getCookieGeoLocation(cookieStore);

  return (
    <CaptchaProvider reCaptchaKey={reCaptchaKey}>
      <ScrollPositionProvider>
        <ScreenWidthProvider>
          <GeoLocationProvider storedValue={cookieGeoLocation}>
            {children}
          </GeoLocationProvider>
        </ScreenWidthProvider>
      </ScrollPositionProvider>
    </CaptchaProvider>
  );
};
