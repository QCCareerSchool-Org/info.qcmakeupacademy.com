import type { FC, PropsWithChildren } from 'react';

import './globals.scss';

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
  </>
);

export default RootLayout;
