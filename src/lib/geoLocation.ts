import Cookies from 'js-cookie';

export type GeoLocation = {
  countryCode: string;
  countryName: string;
  provinceCode: string | null;
  provinceName: string | null;
};

export const getGeoLocation = async (): Promise<GeoLocation> => {
  const fetched = await fetchGeoLocation();
  if (fetched) {
    writeGeoLocation(fetched);
    return fetched;
  }
  throw Error('Unable to fetch geo location');
};

export const writeGeoLocation = (geoLocation: GeoLocation): void => {
  Cookies.set('location', JSON.stringify(geoLocation), { secure: true, sameSite: 'strict' });
};

export const fetchGeoLocation = async (): Promise<GeoLocation | void> => {
  const url = 'https://api.qccareerschool.com/geoLocation/ip';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error('Error fetching geo location data');
    }
    const data: unknown = await response.json();
    if (!isGeoLocation(data)) {
      throw Error('Invalid geo location');
    }
    return data;
  } catch (err) { /* empty */ }
};

export const isGeoLocation = (obj: unknown): obj is GeoLocation => {
  if (obj !== null && typeof obj === 'object') {
    if ('countryCode' in obj && 'countryName' in obj && 'provinceCode' in obj && 'provinceName' in obj) {
      if (typeof obj.countryCode === 'string' && typeof obj.countryName === 'string' && (obj.provinceCode === null || typeof obj.provinceCode === 'string') && (obj.provinceName === null || typeof obj.provinceName === 'string')) {
        return true;
      }
    }
  }
  return false;
};
