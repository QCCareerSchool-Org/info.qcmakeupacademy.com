import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';

const LandingPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
