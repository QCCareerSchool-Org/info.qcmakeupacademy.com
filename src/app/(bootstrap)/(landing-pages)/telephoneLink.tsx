'use client';

import type { FC } from 'react';

import { useGeoLocation } from '@/hooks/useGeoLocation';
import { getTelephoneNumber } from '@/lib/phone';

export const TelephoneLink: FC = () => {
  const geoLocation = useGeoLocation();
  const telephoneNumber = getTelephoneNumber(geoLocation.countryCode);

  return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
};
