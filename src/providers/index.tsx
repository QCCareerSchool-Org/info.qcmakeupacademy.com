import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { cookies } from 'next/headers';
import { FC, PropsWithChildren } from 'react';

import { GeoLocation, GeoLocationProvider, isGeoLocation } from './geoLocation';
import { ScreenWidthProvider } from './screenWidth';

const getCookieGeoLocation = (cookieStore: ReadonlyRequestCookies): GeoLocation | undefined => {
  const cookieValue = cookieStore.get('location');
  if (cookieValue && isGeoLocation(cookieValue.value)) {
    return cookieValue.value;
  }
};

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const cookieStore = cookies();
  const cookieGeoLocation = getCookieGeoLocation(cookieStore);

  return (
    <ScreenWidthProvider>
      <GeoLocationProvider storedValue={cookieGeoLocation}>
        {children}
      </GeoLocationProvider>
    </ScreenWidthProvider>
  );
};
