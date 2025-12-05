import type { RefObject } from 'react';

import { useEventListener } from './useEventListener';

export const useRightClick = (callback: (e: MouseEvent) => void, element?: RefObject<HTMLElement | null | undefined>): void => {
  useEventListener('click', (e: MouseEvent): void => {
    if (e.button === 2) {
      callback(e);
    }
  }, element);
};
