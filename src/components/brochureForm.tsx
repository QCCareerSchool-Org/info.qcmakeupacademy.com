'use client';

import { useCallback, useId, useState } from 'react';
import type { FC, FormEventHandler } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useGeoLocation } from '@/hooks/useGeoLocation';

export type Marketing = {
  gclid?: string;
  msclkid?: string;
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

export type DefaultValues = {
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
};

type Props = {
  action: string;
  buttonText?: string;
  marketing?: Marketing;
  defaultValues?: DefaultValues;
};

export const BrochureForm: FC<Props> = ({ action, buttonText = 'Get the Catalog', marketing, defaultValues }) => {
  const id = useId();
  const geoLocation = useGeoLocation();
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
    setRefreshReCaptcha(r => !r);
  };

  return (
    <form onSubmit={handleSubmit} action={action} method="post">
      <input type="hidden" name="school" value="QC Makeup Academy" />
      <input type="hidden" name="testGroup" value="1" />
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="countryCode" value={geoLocation.countryCode} />
      {geoLocation.provinceCode && <input type="hidden" name="provinceCode" value={geoLocation.provinceCode} />}
      {marketing?.gclid && <input type="hidden" name="gclid" value={marketing.gclid} />}
      {marketing?.msclkid && <input type="hidden" name="gclid" value={marketing.msclkid} />}
      {marketing?.source && <input type="hidden" name="utm_source" value={marketing.source} />}
      {marketing?.medium && <input type="hidden" name="utm_medium" value={marketing.medium} />}
      {marketing?.campaign && <input type="hidden" name="utm_campaign" value={marketing.campaign} />}
      {marketing?.content && <input type="hidden" name="utm_content" value={marketing.content} />}
      {marketing?.term && <input type="hidden" name="utm_term" value={marketing.term} />}
      <div className="mb-3">
        <label htmlFor={`${id}firstName`} className="form-label">Name</label>
        <input type="text" name="firstName" defaultValue={defaultValues?.firstName} id={`${id}firstName`} className="form-control" autoComplete="given-name" />
      </div>
      <input type="hidden" name="lastName" defaultValue={defaultValues?.lastName} />
      <div className="mb-3">
        <label htmlFor={`${id}emailAddress`} className="form-label">Email <span className="text-primary" title="required">*</span></label>
        <input type="email" name="emailAddress" defaultValue={defaultValues?.emailAddress} id={`${id}emailAddress`} className="form-control" autoComplete="email" required />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" value="Yes" />
          <label htmlFor={`${id}emailOptIn`} className="form-check-label">
            I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
          </label>
        </div>
      </div>
      <button className="btn btn-primary">{buttonText}</button>
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};
