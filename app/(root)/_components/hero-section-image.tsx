import { Fragment } from 'react';

import Image from 'next/image';

import { dark, light } from '@/images';

export const HeroSectionImage = () => {
  return (
    <Fragment>
      <Image
        src={light.src}
        width={light.width}
        height={light.height}
        className="block min-w-full rounded-xl dark:hidden"
        alt="Hero Video"
        priority
      />
      <Image
        src={dark.src}
        width={dark.width}
        height={dark.height}
        className="hidden min-w-full rounded-xl dark:block"
        alt="Hero Video"
        priority
      />
    </Fragment>
  );
};
