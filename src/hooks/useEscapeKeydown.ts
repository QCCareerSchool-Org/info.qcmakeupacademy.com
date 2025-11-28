import { useEventListener } from './useEventListener';

export const useEscapeKeydown = (callback: () => void): void => {
  useEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      callback();
    }
  });
};
