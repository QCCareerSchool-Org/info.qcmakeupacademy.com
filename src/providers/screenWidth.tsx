'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { useWindowListener } from 'use-window-listener';

export const ScreenWidthContext = createContext<number | undefined>(undefined);

const valueSelector = (w: Window) => w.innerWidth;
const addEventListenerOptions: AddEventListenerOptions = { passive: true };

export const ScreenWidthProvider: FC<PropsWithChildren> = ({ children }) => {
  const width = useWindowListener('resize', valueSelector, 0, undefined, addEventListenerOptions);

  return (
    <ScreenWidthContext.Provider value={width}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
