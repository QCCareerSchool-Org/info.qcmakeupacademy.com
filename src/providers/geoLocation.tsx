'use client';

import type { FC, ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';

import type { GeoLocation } from '@/lib/geoLocation';
import { getGeoLocation } from '@/lib/geoLocation';

export const GeoLocationContext = createContext<GeoLocation | undefined>(undefined);

interface Props {
  storedValue?: GeoLocation;
  children: ReactNode;
}

const defaultValue: GeoLocation = {
  countryCode: 'US',
  countryName: 'United States',
  provinceCode: 'MD',
  provinceName: 'Maryland',
};

export const GeoLocationProvider: FC<Props> = ({ storedValue, children }) => {
  const [ state, setState ] = useState<GeoLocation>(storedValue ?? defaultValue);

  useEffect(() => {
    if (!storedValue) {
      getGeoLocation().then(setState).catch(() => { /* empty */ });
    }
  }, [ storedValue ]);

  return (
    <GeoLocationContext.Provider value={state}>
      {children}
    </GeoLocationContext.Provider>
  );
};
