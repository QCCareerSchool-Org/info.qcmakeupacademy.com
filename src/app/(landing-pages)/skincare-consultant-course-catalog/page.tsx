import { Metadata } from 'next';
import type { FC } from 'react';
import { SkincareConsultant } from '.';

export const metadata: Metadata = {
  title: 'Get Started with a Skincare Consultant Course Catalog - QC Makeup Academy',
  description: 'Start your skincare consultant career with our flexible online classes. Download our course catalog to learn more about QC makeup school.',
};

const SkincareConsultantPage: FC = () => <SkincareConsultant />;

export default SkincareConsultantPage;
