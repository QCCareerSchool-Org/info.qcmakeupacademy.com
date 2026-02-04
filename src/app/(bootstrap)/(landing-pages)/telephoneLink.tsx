import type { FC } from 'react';

import { getTelephoneNumber } from '@/lib/phone';

interface Props {
  countryCode: string;
}

export const TelephoneLink: FC<Props> = ({ countryCode }) => {
  const telephoneNumber = getTelephoneNumber(countryCode);

  return <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>;
};
