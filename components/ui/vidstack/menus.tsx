import { useCaptionOptions, useMediaPlayer } from '@vidstack/react';
import { SubtitlesIcon } from 'lucide-react';
import type { ComponentProps, FC } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { MediaButtonProps } from '@/components/ui/vidstack/buttons';
import { For } from '@/components/utils/for';

export interface MenuProps extends MediaButtonProps {
  side?: ComponentProps<typeof DropdownMenuContent>['side'];
  align?: ComponentProps<typeof DropdownMenuContent>['align'];
  offset?: ComponentProps<typeof DropdownMenuContent>['sideOffset'];
}

export const Captions: FC<MenuProps> = ({
  side = 'top',
  align = 'end',
  offset = 0,
  tooltipSide = 'top',
  tooltipAlign = 'center',
  tooltipOffset = 0,
}) => {
  const player = useMediaPlayer(),
    options = useCaptionOptions(),
    hint = options.selectedTrack?.label ?? 'Off';
  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger
            aria-label="Settings"
            disabled={options.disabled}
          >
            <SubtitlesIcon className="h-7 w-7" />
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          align={tooltipAlign}
          sideOffset={tooltipOffset}
        >
          Captions
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent
        side={side}
        align={align}
        sideOffset={offset}
        collisionBoundary={player?.el}
      >
        <DropdownMenuLabel className="flex items-center gap-x-2">
          <SubtitlesIcon className="mr-1.5 h-5 w-5 translate-y-px" />
          Captions
          <span className="text-muted-foreground ml-auto text-sm">{hint}</span>
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          aria-label="Captions"
          value={options.selectedValue}
        >
          <For each={options}>
            {(option) => {
              return (
                <DropdownMenuRadioItem
                  value={option.value}
                  onSelect={option.select}
                  key={option.value}
                >
                  {option.label}
                </DropdownMenuRadioItem>
              );
            }}
          </For>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
