import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

const LandingPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default LandingPageLayout;
