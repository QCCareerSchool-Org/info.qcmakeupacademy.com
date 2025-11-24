import { LayoutComponent } from '../serverComponent';

import './layout.scss';

const TailwindLayout: LayoutComponent = ({ children }) => (
  <>
    <script async src="https://cdn.tailwindcss.com" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    {/* eslint-disable-next-line @next/next/no-page-custom-font */}
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
    <script dangerouslySetInnerHTML={{ __html: `tailwind.config = ${JSON.stringify(tailwindConfig)}` }} />
    <style />
    <script type="importmap" dangerouslySetInnerHTML={{ __html: `{ "imports": { "react": "https://aistudiocdn.com/react@^19.2.0", "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/", "react/": "https://aistudiocdn.com/react@^19.2.0/", "lucide-react": "https://aistudiocdn.com/lucide-react@^0.554.0", "framer-motion": "https://aistudiocdn.com/framer-motion@^12.23.24" } }` }} />
    {children}
  </>
);

const tailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        serif: [ '"Playfair Display"', 'serif' ],
        sans: [ '"Lato"', 'sans-serif' ],
      },
      colors: {
        'linen': '#F5F2EB',
        'linen-dark': '#E6E2D6',
        'charcoal': '#1A1A1A',
        'charcoal-light': '#333333',
        'almond': '#DBCFB0',
        'sand': '#C2B8A3',
      },
    },
  },
};

export default TailwindLayout;
