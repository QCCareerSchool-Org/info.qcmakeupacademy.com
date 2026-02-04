/* eslint-disable custom/no-window-outside-effects */
import type { Enrollment } from '@/domain/enrollment';

declare global {
  interface Window {
    uetq?: unknown[];
  }
}

// log the page view with a specific URL
export const uetPageview = (url: string): void => {
  window.uetq = window.uetq ?? [];
  window.uetq.push('event', 'page_view', { page_path: url }); // eslint-disable-line camelcase
};

export interface UETUserData {
  em?: string;
  ph?: string;
}

export const uetUserData = (emailAddress: string, telephoneNumber: string | null): void => {
  window.uetq = window.uetq ?? [];
  const pid: UETUserData = {
    em: uetStandardizeEmailAddress(emailAddress),
  };
  if (telephoneNumber) {
    pid.ph = telephoneNumber;
  }
  window.uetq.push('set', { pid });
};

export const uetSale = (enrollment: Enrollment): void => {
  uetUserData(enrollment.emailAddress, enrollment.telephoneNumber);
  window.uetq?.push('event', '', {
    revenue_value: enrollment.cost, // eslint-disable-line camelcase
    currency: enrollment.currencyCode,
  });
};

export const uetStandardizeEmailAddress = (emailAddress: string): string => {
  emailAddress = stripFinalPeriod(stripWhitespace(stripAccents(emailAddress))).toLowerCase();

  const [ username, domain ] = emailAddress.split('@');
  if (!username || !domain) {
    return emailAddress;
  }

  const usernameParts = username.split('+');

  const firstPart = usernameParts[0];
  if (!firstPart) {
    return emailAddress;
  }

  const strippedUsername = firstPart.replace(/\./ug, '');

  return `${strippedUsername}@${domain}`;
};

const stripFinalPeriod = (str: string): string => {
  if (str.endsWith('.')) {
    return str.slice(0, -1);
  }
  return str;
};

const stripAccents = (str: string): string => {
  return str.normalize('NFD').replace(/\p{Diacritic}/gu, '');
};

const stripWhitespace = (str: string): string => {
  return str.replace(/\s/gu, '');
};
