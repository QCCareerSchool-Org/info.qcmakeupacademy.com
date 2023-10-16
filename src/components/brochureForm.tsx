'use client';

import { useCallback, useId, useRef, useState } from 'react';
import type { FC, FormEventHandler } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

type Props = {
  action: string;
  buttonText?: string;
};

export const BrochureForm: FC<Props> = ({ action, buttonText = 'Get the Catalog' }) => {
  const id = useId();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailAddressRef = useRef<HTMLInputElement>(null);
  const emailOptInRef = useRef<HTMLInputElement>(null);
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);

  const onVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = () => {
    // setRefreshReCaptcha(r => !r);
  };

  return (
    <form onSubmit={handleSubmit} action={action} method="post">
      <input type="hidden" name="school" value="QC Makeup Academy" />
      <input type="hidden" name="testGroup" value="1" />
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <div className="mb-3">
        <label htmlFor={`${id}firstName`} className="form-label">Name</label>
        <input ref={firstNameRef} type="text" name="firstName" id={`${id}firstName`} className="form-control" autoComplete="given-name" />
      </div>
      <input ref={lastNameRef} type="hidden" name="lastName" />
      <div className="mb-3">
        <label htmlFor={`${id}emailAddress`} className="form-label">Email</label>
        <input ref={emailAddressRef} type="email" name="emailAddress" id={`${id}emailAddress`} className="form-control" autoComplete="email" />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input ref={emailOptInRef} className="form-check-input" type="checkbox" value="" id={`${id}emailOptIn`} />
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
