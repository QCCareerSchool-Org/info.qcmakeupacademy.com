import { useState } from 'react';

type UseToggle = (initital?: boolean) => Readonly<[ value: boolean, setTrue: () => void, setFalse: () => void, toggle: () => void]>;

export const useToggle: UseToggle = (intitial = false) => {
  const [ state, setState ] = useState(intitial);

  const setTrue = (): void => setState(true);
  const setFalse = (): void => setState(false);
  const toggle = (): void => setState(s => !s);

  return [ state, setTrue, setFalse, toggle ] as const;
};
