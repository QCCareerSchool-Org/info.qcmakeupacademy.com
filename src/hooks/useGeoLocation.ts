import { useContext } from 'react';

import type { GeoLocation } from '@/providers/geoLocation';
import { GeoLocationContext } from '@/providers/geoLocation';

export const useGeoLocation = (): GeoLocation => {
  const context = useContext(GeoLocationContext);
  if (typeof context === 'undefined') {
    throw Error('useGeoLocationContext must be used within a GeoLocationProvider');
  }
  return context;
};
