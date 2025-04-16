'use client';

import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import '@vidstack/react/player/styles/base.css';
import type { ComponentProps, FC } from 'react';

import type { VideoLayoutProps } from '@/components/ui/vidstack/layouts/video-layout';
import { VideoLayout } from '@/components/ui/vidstack/layouts/video-layout';
import { For } from '@/components/utils/for';
import { Show } from '@/components/utils/show';
import { useIsMounted } from '@/hooks/use-is-mounted';

interface TextTracks {
  src: string;
  label: string;
  language: string;
  kind: 'subtitles' | 'chapters';
  default?: boolean;
}

export interface VideoPlayerProps
  extends Omit<ComponentProps<typeof MediaPlayer>, 'children' | 'poster'> {
  poster?: Omit<ComponentProps<typeof Poster>, 'children'>;
  textTracks?: TextTracks[];
  videoLayout?: VideoLayoutProps;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({
  poster,
  textTracks,
  videoLayout,
  ...props
}) => {
  const isMounted = useIsMounted();
  if (!isMounted) return null;

  return (
    <MediaPlayer
      className="ring-media-focus aspect-video w-full overflow-hidden rounded-md bg-slate-900 font-sans text-white data-[focus]:ring-4"
      crossOrigin
      playsInline
      {...props}
    >
      <MediaProvider>
        <Show show={!!poster?.src}>
          <Poster
            className="absolute inset-0 block h-full w-full rounded-md object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
            {...poster}
          />
        </Show>
        <Show show={!!textTracks?.length}>
          <For each={textTracks}>
            {(textTrack) => {
              return <Track {...textTrack} key={textTrack.src} />;
            }}
          </For>
        </Show>
      </MediaProvider>
      <VideoLayout {...videoLayout} />
    </MediaPlayer>
  );
};
