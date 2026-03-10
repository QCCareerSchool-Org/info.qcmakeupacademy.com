'use client';

import type { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { useWindowListener } from 'use-window-listener';

export const ScrollPositionContext = createContext<number | undefined>(undefined);

const valueSelector = (w: Window) => w.scrollY;
const addEventListenerOptions: AddEventListenerOptions = { passive: true };

export const ScrollPositionProvider: FC<PropsWithChildren> = ({ children }) => {
  const scrollPosition = useWindowListener('scroll', valueSelector, 0, undefined, addEventListenerOptions);

  return (
    <ScrollPositionContext.Provider value={scrollPosition}>
      {children}
    </ScrollPositionContext.Provider>
  );
};
