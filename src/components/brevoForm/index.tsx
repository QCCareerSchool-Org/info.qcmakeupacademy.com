import type { FC, ReactElement } from 'react';

import { Form } from './form';
import { createToken } from '@/lib/formToken';

interface Props {
  successLocation: string;
  listId: number;
  emailTemplateId?: number;
  buttonText?: string;
  buttonClassName?: string;
  placeholders?: boolean;
  gclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  courseCodes?: string[];
  button?: ReactElement;
  referrer: string | null;
  telephoneListId?: number;
  countryCode?: string | null;
}

export const BrevoForm: FC<Props> = async props => {
  const token = await createToken();
  return <Form token={token} {...props} />;
};
