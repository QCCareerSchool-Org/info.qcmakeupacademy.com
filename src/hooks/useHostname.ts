import { useState } from 'react';

export const useHostname = (): string => {
  const [ host ] = useState(window.location.hostname);

  return host;
};
