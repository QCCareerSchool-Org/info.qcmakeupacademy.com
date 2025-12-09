import { useContext } from 'react';

import { ScrollPositionContext } from '@/providers/scrollPosition';

export const useScrollPosition = (): number => {
  const state = useContext(ScrollPositionContext);
  if (typeof state === 'undefined') {
    throw Error('useScrollPosition must be used inside of a ScrollPositionProvider.');
  }
  return state;
};
