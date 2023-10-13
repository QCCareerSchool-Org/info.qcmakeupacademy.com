'use client';

import { useCallback, useId, useState } from 'react';
import type { FC, FormEventHandler } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

type Props = {
  action: string;
  buttonText?: string;
};

export const BrochureForm: FC<Props> = ({ action, buttonText = 'Get the Catalog' }) => {
  const id = useId();
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);

  const onVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
    console.log(token);
    setRefreshReCaptcha(r => !r);
  };

  return (
    <form onSubmit={handleSubmit} action={action} method="post">
      <div className="mb-3">
        <label htmlFor={`${id}firstName`} className="form-label">Name</label>
        <input type="text" name="firstName" id={`${id}firstName`} className="form-control" autoComplete="given-name" />
      </div>
      <div className="mb-3">
        <label htmlFor={`${id}emailAddress`} className="form-label">Email</label>
        <input type="email" name="emailAddress" id={`${id}emailAddress`} className="form-control" autoComplete="email" />
      </div>
      <input type="hidden" name="lastName" />
      <div className="mb-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id={`${id}emailOptIn`} />
          <label className="form-check-label" htmlFor={`${id}emailOptIn`}>
            I agree to receive additional emails from QC, including promotions, course launches, special offers and more. Unsubscribe anytime!
          </label>
        </div>
      </div>
      <button className="btn btn-primary">{buttonText}</button>
      <GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};
