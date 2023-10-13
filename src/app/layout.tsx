import type { Metadata } from 'next';
import { FC, PropsWithChildren } from 'react';

import { GoogleAnalytics } from '@/components/googleAnalytics';
import { Providers } from '@/providers';

import './globals.scss';

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Playfair+Display:ital,wght@0,500;1,500;&display=swap" rel="stylesheet" />
      </head>
      <body>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} />}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
