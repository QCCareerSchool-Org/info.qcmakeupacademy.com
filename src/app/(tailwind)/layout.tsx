import { LayoutComponent } from '../serverComponent';
import { Footer } from './_components/footer';
import { Header } from './_components/header';

import './layout.scss';

const TailwindLayout: LayoutComponent = ({ children }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default TailwindLayout;
