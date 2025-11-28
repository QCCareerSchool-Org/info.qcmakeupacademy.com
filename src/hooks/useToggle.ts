import { useCallback, useState } from 'react';

type UseToggle = (initial?: boolean) => Readonly<[ value: boolean, setTrue: () => void, setFalse: () => void, toggle: () => void]>;

/**
 * Keeps track of a boolean value and provides updater function
 * @note updater functions are stable
 * @param initial the initial value
 * @returns the current value and updater function
 */
export const useToggle: UseToggle = (initial = false) => {
  const [ state, setState ] = useState(initial);

  const setTrue = useCallback((): void => {
    setState(true);
  }, []);

  const setFalse = useCallback((): void => {
    setState(false);
  }, []);

  const toggle = useCallback((): void => {
    setState(s => !s);
  }, []);

  return [ state, setTrue, setFalse, toggle ] as const;
};
