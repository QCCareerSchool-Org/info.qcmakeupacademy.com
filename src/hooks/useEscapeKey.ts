import { useEventListener } from './useEventListener';

export const useEscapeKey = (callback: () => void) => {
  
  const handler = (e: KeyboardEvent) => {
    // Check if the pressed key is the Escape key
    if (e.key === 'Escape') {
      callback();
    }
  }

  useEventListener('keydown', handler);
};