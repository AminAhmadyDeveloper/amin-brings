'use client';

import type { FC } from 'react';
import { Fragment } from 'react';

import { CardSpotlight } from '@/app/(root)/_components/card-spotlight';
import { FeaturesIcon } from '@/app/(root)/_components/features-icon';
import { For } from '@/components/utils/for';
import { trpc } from '@/providers/trpc-provider';

export const FeaturesList: FC = () => {
  const [features] = trpc.features.listOfFeatures.useSuspenseQuery();

  return (
    <Fragment>
      <For each={features}>
        {(feature) => {
          return (
            <CardSpotlight
              key={feature.name}
              name={feature.name}
              description={feature.description}
              logo={
                <FeaturesIcon iconName={feature.logo} className="size-12" />
              }
            />
          );
        }}
      </For>
    </Fragment>
  );
};
