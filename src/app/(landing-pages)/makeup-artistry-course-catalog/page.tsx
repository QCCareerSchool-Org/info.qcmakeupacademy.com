import { Metadata } from 'next';

import { MakeupArtistry } from '.';
import { PageComponent } from '@/app/serverComponent';
import { getParam } from '@/lib/getParam';

export const metadata: Metadata = {
  title: 'Get Started with a Free Course Catalog - QC Makeup Academy',
  description: 'Start your MUA career with our flexible online makeup classes. Download our course catalog to learn more about QC makeup school.',
};

const MakeupArtistryPage: PageComponent = ({ searchParams }) => {
  const gclid = getParam(searchParams.gclid);
  const msclkid = getParam(searchParams.msclkid);
  const utmSource = getParam(searchParams.utm_source);
  const utmMedium = getParam(searchParams.utm_medium);
  const utmCampaign = getParam(searchParams.utm_campaign);
  const utmContent = getParam(searchParams.utm_content);
  const utmTerm = getParam(searchParams.utm_term);

  return <MakeupArtistry gclid={gclid} msclkid={msclkid} utmSource={utmSource} utmMedium={utmMedium} utmCampaign={utmCampaign} utmContent={utmContent} utmTerm={utmTerm} />;
};

export default MakeupArtistryPage;
