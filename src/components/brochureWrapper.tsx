import type { FC, PropsWithChildren } from 'react';

export const BrochureWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="card bg-black text-white">
    <div className="card-body p-4">
      {children}
    </div>
  </div>
);
