import { Handler, useEventListener } from './useEventListener';

export const useEscapeKey = (callback: () => void): void => {

  const handler: Handler<KeyboardEvent> = e => {
    // Check if the pressed key is the Escape key
    if (e.key === 'Escape') {
      callback();
    }
  };

  useEventListener('keydown', handler);
};
