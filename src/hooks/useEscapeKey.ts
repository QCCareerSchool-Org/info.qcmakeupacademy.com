import { useEventListener } from './useEventListener';

export const useEscapeKey = (callback: () => void): void => {

  useEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      callback();
    }
  });
};
