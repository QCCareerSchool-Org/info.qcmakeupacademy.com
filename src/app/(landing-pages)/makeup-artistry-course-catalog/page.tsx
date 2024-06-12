import { Metadata } from 'next';
import type { FC } from 'react';

import { MakeupArtistry } from '.';

export const metadata: Metadata = {
  title: 'Get Started with a Free Course Catalog - QC Makeup Academy',
  description: 'Start your MUA career with our flexible online makeup classes. Download our course catalog to learn more about QC makeup school.',
};

const MakeupArtistryPage: FC = () => <MakeupArtistry />;

export default MakeupArtistryPage;
