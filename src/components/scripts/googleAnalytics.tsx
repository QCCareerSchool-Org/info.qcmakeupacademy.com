import Script from 'next/script';
import type { FC } from 'react';

type Props = {
  id: string;
};

export const GoogleAnalytics: FC<Props> = ({ id }) => (
  <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} />
    <Script id="google-analytics" dangerouslySetInnerHTML={{ __html: getScript(id) }} />
  </>
);

const getScript = (id: string): string => `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', \`${id.replace(/`/ug, '\\`')}\`);
`;
