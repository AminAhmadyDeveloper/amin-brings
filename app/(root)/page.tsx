import React, { Suspense } from 'react';

import type { NextPage } from 'next';

import { BackgroundParticles } from '@/app/(root)/_components/background-particles';
import { FeaturesList } from '@/app/(root)/_components/features-list';
import { FeaturesListSkeleton } from '@/app/(root)/_components/features-list-skeleton';
import { HeroSection } from '@/app/(root)/_components/hero-section';
import { ReviewsList } from '@/app/(root)/_components/reviews-list';
import { VideoPlayer } from '@/components/ui/video-player';

const textTracks = [
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
    label: 'English',
    language: 'en-US',
    kind: 'subtitles',
    default: true,
  },
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/spanish.vtt',
    label: 'Spanish',
    language: 'es-ES',
    kind: 'subtitles',
  },
  {
    src: 'https://files.vidstack.io/sprite-fight/chapters.vtt',
    kind: 'chapters',
    language: 'en-US',
    default: true,
  },
];

const MainPage: NextPage = async () => {
  return (
    <main className="pt-14">
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
        <div className="mb-16 grid gap-6 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          <Suspense fallback={<FeaturesListSkeleton />}>
            <FeaturesList />
          </Suspense>
        </div>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          <a id="player">Video Player</a>
        </h2>
        <p className="text-muted-foreground mb-10 text-center text-balance md:text-lg lg:text-xl">
          Powerful VidStack is here with you in this boilerplate
        </p>
        <div>
          <Suspense fallback={<FeaturesListSkeleton />}>
            <VideoPlayer
              title="Sprite Fight"
              src="https://files.vidstack.io/sprite-fight/720p.mp4"
              poster={{
                src: 'https://files.vidstack.io/sprite-fight/poster.webp',
                alt: 'Girl walks into campfire with gnomes surrounding her friend ready for their next meal!',
              }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              textTracks={textTracks as any}
              videoLayout={{
                thumbnails:
                  'https://files.vidstack.io/sprite-fight/thumbnails.vtt',
              }}
            />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
