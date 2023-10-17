/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Open_Sans, Playfair_Display } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import { Bing } from '@/components/scripts/bing';
import { Facebook } from '@/components/scripts/facebook';
import { GoogleAnalytics } from '@/components/scripts/googleAnalytics';
import { Pardot } from '@/components/scripts/pardot';
import { Tiktok } from '@/components/scripts/tiktok';
import { TrustPulse } from '@/components/scripts/trustPulse';
import { VWO } from '@/components/scripts/vwo';
import { Providers } from '@/providers';

import './globals.scss';

export const metadata: Metadata = {
  title: 'QC Makeup Academy',
};

const openSans = Open_Sans({
  weight: [ '300', '400', '700' ],
  style: [ 'normal', 'italic' ],
  subsets: [ 'latin' ],
  variable: '--qc-open-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  weight: [ '500' ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {process.env.VWO_ID && <VWO id={parseInt(process.env.VWO_ID, 10)} />}
      </head>
      <body>
        {process.env.GOOGLE_ANALYTICS_ID && <GoogleAnalytics id={process.env.GOOGLE_ANALYTICS_ID} adsId={process.env.GOOGLE_ADS_ID} />}
        {process.env.FACEBOOK_ID && <Facebook id={process.env.FACEBOOK_ID} />}
        {process.env.TIKTOK_ID && <Tiktok id={process.env.TIKTOK_ID} />}
        <Providers>
          {children}
        </Providers>
        {process.env.PARDOT_ACCOUNT_ID && process.env.PARDOT_CAMPAIGN_ID && <Pardot accountId={process.env.PARDOT_ACCOUNT_ID} campaignId={process.env.PARDOT_CAMPAIGN_ID} />}
        {process.env.BING_ID && <Bing id={process.env.BING_ID} />}
        {process.env.TRUSTPULSE_ID && <TrustPulse id={parseInt(process.env.TRUSTPULSE_ID, 10)} />}
      </body>
    </html>
  );
};

export default RootLayout;
