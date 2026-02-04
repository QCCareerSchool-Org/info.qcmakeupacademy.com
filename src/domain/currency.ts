import type { CurrencyCode } from './currencyCode';
import { isCurrencyCode } from './currencyCode';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  exchangeRate: number;
}

export const isCurrency = (obj: unknown): obj is Currency => {
  return obj !== null && typeof obj === 'object' &&
    'code' in obj && isCurrencyCode(obj.code) &&
    'symbol' in obj && typeof obj.symbol === 'string' &&
    'name' in obj && typeof obj.name === 'string' &&
    'exchangeRate' in obj && typeof obj.exchangeRate === 'number';
};

const gbpCountries = [ 'GB', 'IM', 'GG', 'JE', 'GS' ];

/** determines if we charge people from a country in pounds sterling */
export const gbpCountry = (countryCode: string | null): boolean => {
  if (countryCode === null) {
    return false;
  }
  return gbpCountries.includes(countryCode.toUpperCase());
};
