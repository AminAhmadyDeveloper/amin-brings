import * as Tooltip from '@radix-ui/react-tooltip';
import { Captions, Controls, Gesture } from '@vidstack/react';
import { type FC, Fragment } from 'react';

import * as Buttons from '../buttons';
import * as Menus from '../menus';
import * as Sliders from '../sliders';
import { TimeGroup } from '../time-group';
import { Title } from '../title';

const popupOffset = 30 as const;

export interface VideoLayoutProps {
  thumbnails?: string;
}

export const VideoLayout: FC<VideoLayoutProps> = ({ thumbnails }) => {
  return (
    <Fragment>
      <Gestures />
      <Captions className="media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 break-words opacity-0 transition-[opacity,bottom] duration-300 select-none" />
      <Controls.Root className="media-controls:opacity-100 from-background/50 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t to-transparent opacity-0 transition-opacity">
        <Tooltip.Provider>
          <div className="flex-1" />
          <Controls.Group className="flex w-full items-center px-2">
            <Sliders.Time thumbnails={thumbnails} />
          </Controls.Group>
          <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
            <Buttons.Play tooltipAlign="start" tooltipOffset={popupOffset} />
            <Buttons.Mute tooltipOffset={popupOffset} />
            <Sliders.Volume />
            <TimeGroup />
            <Title />
            <div className="flex-1" />
            <Menus.Captions offset={popupOffset} tooltipOffset={popupOffset} />
            <Buttons.PIP tooltipOffset={popupOffset} />
            <Buttons.Fullscreen
              tooltipAlign="end"
              tooltipOffset={popupOffset}
            />
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Root>
    </Fragment>
  );
};

function Gestures() {
  return (
    <Fragment>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture
        className="absolute top-0 left-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      <Gesture
        className="absolute top-0 right-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </Fragment>
  );
}
