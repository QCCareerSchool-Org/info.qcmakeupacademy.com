interface Properties {
  FIRSTNAME?: string;
  LASTNAME?: string;
  COUNTRY_CODE?: string;
  PROVINCE_CODE?: string;
  STATUS_EVENT_LEAD?: true;
  STATUS_EVENT_STUDENT?: true;
}

declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
      identify: (emailAddress: string, properties: Properties) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line camelcase
    ma_url: url, // eslint-disable-line camelcase
    ma_path: path, // eslint-disable-line camelcase
  });
};

export const brevoIdentifyLead = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  window.sendinblue?.identify(emailAddress, {
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    COUNTRY_CODE: countryCode,
    PROVINCE_CODE: provinceCode,
    STATUS_EVENT_LEAD: true,
  });
};

export const brevoIdentifyStudent = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  window.sendinblue?.identify(emailAddress, {
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    COUNTRY_CODE: countryCode,
    PROVINCE_CODE: provinceCode,
    STATUS_EVENT_STUDENT: true,
  });
};
