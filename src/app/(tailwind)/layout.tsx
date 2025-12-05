import type { LayoutComponent } from '../serverComponent';
import { Footer } from './_components/footer';

import './layout.scss';

const TailwindLayout: LayoutComponent = ({ children }) => (
  <>
    <main>
      {children}
    </main>
    <Footer />
  </>
);

export default TailwindLayout;
