import type { FC, PropsWithChildren } from 'react';

import './globals.scss';

const RootLayout: FC<PropsWithChildren> = async ({ children }) => (
  <>
    {children}
  </>
);

export default RootLayout;
