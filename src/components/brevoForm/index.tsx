'use client';

import 'react-phone-number-input/style.css';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import type { ChangeEventHandler, FC, FormEventHandler, ReactElement } from 'react';
import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { DefaultInputComponentProps } from 'react-phone-number-input';
import PhoneInput from 'react-phone-number-input/input';
import type { Country, Value } from 'react-phone-number-input/input';
import { v1 } from 'uuid';

import styles from './index.module.scss';
import DownloadIcon from '@/components/download.svg';

type Props = {
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
};

export const BrevoForm: FC<Props> = props => {
  const id = useId();
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ telephoneNumber, setTelephoneNumber ] = useState<Value>();
  const [ emailAddress, setEmailAddress ] = useState('');
  const [ token, setToken ] = useState<string>();
  const [ refreshReCaptcha, setRefreshReCaptcha ] = useState(false);
  const submitting = useRef(false);
  const [ disabled, setDisabled ] = useState(true);

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = e => {
    setLastName(e.target.value);
  };

  const handleTelephoneNumberChange = (value?: Value): void => {
    setTelephoneNumber(value);
  };

  const handleEmailAddressChange: ChangeEventHandler<HTMLInputElement> = e => {
    setEmailAddress(e.target.value);
  };

  const handleVerify = useCallback((t: string): void => {
    setToken(t);
  }, []);

  // Google reCaptcha token expires after 2 minutes
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRefreshReCaptcha(r => !r);
    }, 90_000); // 90 seconds

    return (): void => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDisabled(false);
    }, 1_000);

    return (): void => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSubmit: FormEventHandler = e => {
    if (submitting.current || disabled) {
      e.preventDefault();
      return false;
    }
    submitting.current = true;

    setTimeout(() => { submitting.current = false; }, 10_000);

    return true;
  };

  return (
    <form action="https://leads.qccareerschool.com" method="post" className={styles.brochureForm} onSubmit={handleSubmit}>
      <input type="hidden" name="g-recaptcha-response" value={token} />
      <input type="hidden" name="school" value="QC Makeup Academy" />
      <input type="hidden" name="successLocation" value={props.successLocation} />
      <input type="hidden" name="listId" value={props.listId} />
      <input type="hidden" name="nonce" value={v1()} />
      {props.courseCodes?.map(c => <input key={c} type="hidden" name="courseCodes" value={c} />)}
      {typeof props.emailTemplateId !== 'undefined' && <input type="hidden" name="emailTemplateId" value={props.emailTemplateId} />}
      {props.gclid && <input type="hidden" name="gclid" value={props.gclid} />}
      {props.msclkid && <input type="hidden" name="msclkid" value={props.msclkid} />}
      {props.utmSource && <input type="hidden" name="utmSource" value={props.utmSource} />}
      {props.utmMedium && <input type="hidden" name="utmMedium" value={props.utmMedium} />}
      {props.utmCampaign && <input type="hidden" name="utmCampaign" value={props.utmCampaign} />}
      {props.utmContent && <input type="hidden" name="utmContent" value={props.utmContent} />}
      {props.utmTerm && <input type="hidden" name="utmTerm" value={props.utmTerm} />}
      {props.referrer && <input type="hidden" name="referrer" value={props.referrer} />}
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}firstName`} className="form-label">Name</label>}
        <input onChange={handleFirstNameChange} value={firstName} type="text" name="firstName" id={`${id}firstName`} className="form-control" placeholder={props.placeholders ? 'Name' : undefined} autoComplete="given-name" autoCapitalize="words" />
      </div>
      <input onChange={handleLastNameChange} value={lastName} type="hidden" name="lastName" id={`${id}lastName`} />
      {(props.countryCode === 'CA' || props.countryCode === 'US') && typeof props.telephoneListId !== 'undefined' && (
        <>
          <input type="hidden" name="telephoneListId" value={props.telephoneListId} />
          <div className="mb-3">
            {!props.placeholders && <label htmlFor={`${id}telephoneNumber`} className="form-label">Phone (optional)</label>}
            <PhoneInput id={`${id}telephoneNumber`} value={telephoneNumber} onChange={handleTelephoneNumberChange} defaultCountry={props.countryCode as Country} inputComponent={InputComponent} />
            <input type="hidden" name="telephoneNumber" value={telephoneNumber} />
            <p className="p-1"><small>By providing your phone number, you agree to receive exclusive offers from QC Makeup Academy. Message frequency varies. Message & data rates may apply. Reply STOP to opt out. <Link href="https://www.qcmakeupacademy.com/terms.html" target="_blank" rel="noreferrer">Terms & Privacy</Link>.</small></p>
          </div>
        </>
      )}
      <div className="mb-3">
        {!props.placeholders && <label htmlFor={`${id}emailAddress`} className="form-label">Email <span className="text-primary">*</span></label>}
        <input onChange={handleEmailAddressChange} value={emailAddress} type="email" name="emailAddress" id={`${id}emailAddress`} className={`form-control ${styles.emailAddressInput}`} placeholder={props.placeholders ? 'Email *' : undefined} required autoComplete="email" autoCapitalize="none" />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input type="checkbox" name="emailOptIn" id={`${id}emailOptIn`} className="form-check-input" />
          <label htmlFor={`${id}emailOptIn`} className="form-check-label small">
            I agree to receive additional emails from QC, including <span className="d-none d-md-inline">promotions, </span>special offers<span className="d-none d-md-inline"> and more</span>. Unsubscribe anytime!
          </label>
        </div>
      </div>
      {props.button
        ? <>{props.button}</>
        : (
          <button className={`${styles.button} ${props.buttonClassName ?? 'btn btn-primary'}`} disabled={disabled}><span className="text-navy"><Image src={DownloadIcon as StaticImageData} alt="" height="14" className="me-2" style={{ position: 'relative', top: -1 }} /></span>{props.buttonText ?? 'Get Your Free Catalog'}</button>
        )
      }
      <GoogleReCaptcha onVerify={handleVerify} refreshReCaptcha={refreshReCaptcha} />
    </form>
  );
};

type InputProps = {
  value: Value;
  onChange: ChangeEventHandler;
};

const InputComponent = forwardRef<HTMLInputElement, DefaultInputComponentProps>((props, ref) => {
  const { value, onChange } = props as InputProps;
  return <input ref={ref} type="tel" value={value} onChange={onChange} className="form-control" placeholder="Phone (Optional)" />;
});

InputComponent.displayName = 'InputComponent';
