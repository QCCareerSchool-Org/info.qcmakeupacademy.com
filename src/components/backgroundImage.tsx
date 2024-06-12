import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { CSSProperties, FC } from 'react';
import { memo } from 'react';

type Props = {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  desktopObjectPosition?: CSSProperties['objectPosition'];
  mobileObjectPosition?: CSSProperties['objectPosition'];
  priority?: boolean;
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

export const BackgroundImage: FC<Props> = memo(({ desktopSrc, mobileSrc, desktopObjectPosition, mobileObjectPosition, priority, breakpoint = 'lg' }) => {
  console.log('render');
  return (
    <>
      <div className={`d-none d-${breakpoint}-block`}><Part src={desktopSrc} objectPosition={desktopObjectPosition} priority={priority} /></div>
      <div className={`d-${breakpoint}-none`}><Part src={mobileSrc} objectPosition={mobileObjectPosition} priority={priority} /></div>
    </>
  );
});

BackgroundImage.displayName = 'BackgroundImage';

type PartProps = {
  src: StaticImageData;
  objectPosition: CSSProperties['objectPosition'];
  priority?: boolean;
};

const Part: FC<PartProps> = ({ src, objectPosition, priority }) => (
  <Image src={src} placeholder="blur" alt="" priority={priority} fill sizes="100vw" style={{ objectFit: 'cover', objectPosition }} />
);
