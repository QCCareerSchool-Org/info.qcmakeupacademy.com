'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext, useEffect, useState } from 'react';

export const ScrollPositionContext = createContext<number | undefined>(undefined);

export const ScrollPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [ state, dispatch ] = useState(0);

  useEffect(() => {
    dispatch(window.scrollY);
    const listener = (): void => dispatch(window.scrollY);
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <ScrollPositionContext.Provider value={state}>
      {children}
    </ScrollPositionContext.Provider>
  );
};
