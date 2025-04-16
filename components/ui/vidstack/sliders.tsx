'use client';

import {
  Thumbnail,
  formatTime,
  useMediaRemote,
  useMediaState,
  useSliderPreview,
} from '@vidstack/react';
import { type FC } from 'react';
import { useEffect, useState } from 'react';

import { Slider } from '@/components/ui/slider';

export const Volume: FC = () => {
  const volume = useMediaState('volume'),
    canSetVolume = useMediaState('canSetVolume'),
    remote = useMediaRemote();

  if (!canSetVolume) return null;

  return (
    <Slider
      className="relative inline-flex h-10 w-full max-w-[80px]"
      value={[volume * 100]}
      onValueChange={([value]) => {
        remote.changeVolume(value / 100);
      }}
    />
  );
};

export interface TimeSliderProps {
  thumbnails?: string;
}

export const Time: FC<TimeSliderProps> = ({ thumbnails }) => {
  const time = useMediaState('currentTime'),
    canSeek = useMediaState('canSeek'),
    duration = useMediaState('duration'),
    seeking = useMediaState('seeking'),
    remote = useMediaRemote(),
    step = (1 / duration) * 100,
    [value, setValue] = useState(0),
    { previewRootRef, previewRef, previewValue } = useSliderPreview({
      clamp: true,
      offset: 6,
      orientation: 'horizontal',
    }),
    previewTime = (previewValue / 100) * duration;

  useEffect(() => {
    if (seeking) return;
    setValue((time / duration) * 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time, duration]);

  return (
    <div className="relative w-full">
      <Slider
        className="relative inline-flex h-9 !w-full"
        value={[value]}
        disabled={!canSeek}
        step={Number.isFinite(step) ? step : 1}
        ref={previewRootRef}
        onValueChange={([value]) => {
          setValue(value);
          remote.seeking((value / 100) * duration);
        }}
        onValueCommit={([value]) => {
          remote.seek((value / 100) * duration);
        }}
      />

      <div
        className="pointer-events-none absolute flex flex-col items-center rounded-xl opacity-0 transition-opacity duration-200 data-[visible]:opacity-100"
        ref={previewRef}
      >
        {thumbnails ? (
          <Thumbnail.Root
            src={thumbnails}
            time={previewTime}
            className="mb-2 block h-[var(--thumbnail-height)] max-h-[160px] min-h-[80px] w-[var(--thumbnail-width)] max-w-[180px] min-w-[120px] overflow-hidden rounded-xl border"
          >
            <Thumbnail.Img />
          </Thumbnail.Root>
        ) : null}
        <span className="text-sm">{formatTime(previewTime)}</span>
      </div>
    </div>
  );
};
