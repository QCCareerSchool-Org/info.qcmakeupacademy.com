'use client';

import { usePathname } from 'next/navigation';
import type { FC } from 'react';
import { useHostname } from '../../hooks/useHostname';

export const CurrentPageInput: FC = () => {
  const path = usePathname();
  const host = useHostname();
  return <input type="hidden" name="currentPage" value={`${host}${path}`} />;
};
