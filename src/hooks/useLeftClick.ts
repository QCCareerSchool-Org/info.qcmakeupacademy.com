import { RefObject } from 'react';
import { useEventListener } from './useEventListener';

export const useLeftClick = (callback: (e: MouseEvent) => void, element?: RefObject<HTMLElement | null | undefined>): void => {
  useEventListener('click', (e: MouseEvent): void => {
    if (e.button === 0) {
      callback(e);
    }
  }, element);
};
