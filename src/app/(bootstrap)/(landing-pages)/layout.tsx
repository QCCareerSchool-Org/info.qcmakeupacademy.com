import type { FC, PropsWithChildren } from 'react';

import { Footer } from './footer';
import { Header } from './header';
import { getServerData } from '@/lib/getServerData';

const LandingPageLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { countryCode } = await getServerData();

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer countryCode={countryCode} />
    </>
  );
};

export default LandingPageLayout;
