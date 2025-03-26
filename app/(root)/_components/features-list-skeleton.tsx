import React, { Fragment } from 'react';

import { Skeleton } from '@/components/ui/skeleton';
import { For } from '@/components/utils/for';

export const FeaturesListSkeleton = () => {
  return (
    <Fragment>
      <For each={[1, 2, 3, 4, 5, 6]}>
        {(feature) => {
          return <Skeleton key={feature} className="h-64" />;
        }}
      </For>
    </Fragment>
  );
};
