import React, { Suspense } from 'react';

import type { NextPage } from 'next';

import { BackgroundParticles } from '@/app/(root)/_components/background-particles';
import { FeaturesList } from '@/app/(root)/_components/features-list';
import { FeaturesListSkeleton } from '@/app/(root)/_components/features-list-skeleton';
import { HeroSection } from '@/app/(root)/_components/hero-section';
import { ReviewsList } from '@/app/(root)/_components/reviews-list';

const MainPage: NextPage = async () => {
  return (
    <main>
      <div className="container">
        <BackgroundParticles />
        <HeroSection />
      </div>
      <div className="container">
        <h2 className="-mt-10 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          <a id="reviews"></a> Trusted By
        </h2>
        <p className="text-muted-foreground mb-10 text-center text-balance md:text-lg lg:text-xl">
          MoreThan 150 Members In Open Source Community
        </p>
      </div>
      <div className="mb-16 w-full">
        <ReviewsList />
      </div>

      <div className="container mt-8">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          <a id="features"></a> Features
        </h2>
        <p className="text-muted-foreground mb-10 text-center text-balance md:text-lg lg:text-xl">
          A Next.js boilerplate with better authentication and Drizzle
          integration
        </p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          <Suspense fallback={<FeaturesListSkeleton />}>
            <FeaturesList />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
