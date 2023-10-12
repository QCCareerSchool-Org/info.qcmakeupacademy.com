import { useContext } from 'react';
import { ScreenWidthContext } from '@/providers/screenWidth';

export const useScreenWidth = (): number => {
  const state = useContext(ScreenWidthContext);
  if (typeof state === 'undefined') {
    throw Error('useScreenWidth must be used inside of a ScreenWidthProvider.');
  }
  return state;
};
