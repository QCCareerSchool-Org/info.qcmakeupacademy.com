import type { Metadata } from 'next';
import { Open_Sans as OpenSans, Playfair_Display as PlayfairDisplay } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { Tiktok } from '@/components/scripts/tiktok';
import { Providers } from '@/providers';

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
};

const openSans = OpenSans({
  weight: [ '300', '400', '700' ],
  style: [ 'normal', 'italic' ],
  subsets: [ 'latin' ],
  variable: '--qc-open-sans',
  display: 'swap',
});

const playfairDisplay = PlayfairDisplay({
  weight: [ '400', '500', '600' ],
  style: [ 'normal', 'italic' ],
  subsets: [ 'latin' ],
  variable: '--qc-playfair-display',
  display: 'swap',
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${openSans.variable} ${playfairDisplay.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
      </body>
    </html>
  );
};

export default RootLayout;
