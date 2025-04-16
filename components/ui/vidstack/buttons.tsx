import {
  CaptionButton,
  FullscreenButton,
  MuteButton,
  PIPButton,
  PlayButton,
  isTrackCaptionKind,
  useMediaState,
} from '@vidstack/react';
import {
  Minimize as FullscreenExitIcon,
  Maximize as FullscreenIcon,
  VolumeX as MuteIcon,
  PauseIcon,
  PictureInPictureIcon as PictureInPictureExitIcon,
  PictureInPicture2 as PictureInPictureIcon,
  PlayIcon,
  SubtitlesIcon,
  Volume2Icon as VolumeHighIcon,
  Volume1Icon as VolumeLowIcon,
} from 'lucide-react';
import type { ComponentProps, FC } from 'react';
import { Fragment } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Switcher } from '@/components/utils/switcher';

export interface MediaButtonProps {
  tooltipSide?: ComponentProps<typeof TooltipContent>['side'];
  tooltipAlign?: ComponentProps<typeof TooltipContent>['align'];
  tooltipOffset?: number;
}

export const buttonClass =
  'group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 focus-visible:ring-4 aria-disabled:hidden';

export const tooltipClass =
  'animate-out fade-out slide-out-to-bottom-2 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in data-[state=delayed-open]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden';

export const Play: FC<MediaButtonProps> = ({
  tooltipAlign,
  tooltipOffset,
  tooltipSide,
}) => {
  const isPaused = useMediaState('paused');
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <PlayButton className={buttonClass}>
          <Switcher next={isPaused}>
            <PauseIcon className="h-7 w-7" />
            <PlayIcon className="h-7 w-7 translate-x-px" />
          </Switcher>
        </PlayButton>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        <Switcher next={isPaused}>
          <Fragment>Pause</Fragment>
          <Fragment>Play</Fragment>
          <PlayIcon className="h-7 w-7 translate-x-px" />
        </Switcher>
      </TooltipContent>
    </Tooltip>
  );
};

export const Mute: FC<MediaButtonProps> = ({
  tooltipAlign,
  tooltipOffset,
  tooltipSide,
}) => {
  const volume = useMediaState('volume');
  const isMuted = useMediaState('muted');
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <MuteButton className={buttonClass}>
          <Switcher next={isMuted || volume === 0}>
            <Switcher next={volume <= 0.5}>
              <VolumeHighIcon className="h-7 w-7" />
              <VolumeLowIcon className="h-7 w-7" />
            </Switcher>
            <MuteIcon className="h-7 w-7" />
          </Switcher>
        </MuteButton>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        <Switcher next={isMuted}>
          <Fragment>Mute</Fragment>
          <Fragment>Unmute</Fragment>
        </Switcher>
      </TooltipContent>
    </Tooltip>
  );
};

export const Caption: FC<MediaButtonProps> = ({
  tooltipAlign,
  tooltipOffset,
  tooltipSide,
}) => {
  const track = useMediaState('textTrack');
  const isOn = track && isTrackCaptionKind(track);
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <CaptionButton className={buttonClass}>
          <SubtitlesIcon />
        </CaptionButton>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        <Switcher next={!!isOn}>
          <Fragment>Closed-Captions On</Fragment>
          <Fragment>Closed-Captions Off</Fragment>
        </Switcher>
      </TooltipContent>
    </Tooltip>
  );
};

export const PIP: FC<MediaButtonProps> = ({
  tooltipAlign,
  tooltipOffset,
  tooltipSide,
}) => {
  const isActive = useMediaState('pictureInPicture');
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <PIPButton className={buttonClass}>
          <Switcher next={isActive}>
            <PictureInPictureIcon className="h-7 w-7" />
            <PictureInPictureExitIcon className="h-7 w-7" />
          </Switcher>
        </PIPButton>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        <Switcher next={isActive}>
          <Fragment>Enter PIP</Fragment>
          <Fragment>Exit PIP</Fragment>
        </Switcher>
      </TooltipContent>
    </Tooltip>
  );
};

export const Fullscreen: FC<MediaButtonProps> = ({
  tooltipAlign,
  tooltipOffset,
  tooltipSide,
}) => {
  const isActive = useMediaState('fullscreen');
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <FullscreenButton className={buttonClass}>
          <Switcher next={isActive}>
            <FullscreenIcon className="h-7 w-7" />
            <FullscreenExitIcon className="h-7 w-7" />
          </Switcher>
        </FullscreenButton>
      </TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align={tooltipAlign}
        sideOffset={tooltipOffset}
      >
        <Switcher next={isActive}>
          <Fragment>Enter Fullscreen</Fragment>
          <Fragment>Exit Fullscreen</Fragment>
        </Switcher>
      </TooltipContent>
    </Tooltip>
  );
};
