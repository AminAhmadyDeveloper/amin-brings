'use client';

import { ComputerIcon, MoonIcon, SunIcon } from 'lucide-react';
import type { FC } from 'react';
import React from 'react';

import { useTheme } from 'next-themes';

import { useIsMounted } from '@/hooks/use-is-mounted';
import { cn } from '@/libraries/tailwind-utils';

export const ThemeToggle: FC<ReactDiv> = ({ className, ...props }) => {
  const { setTheme, theme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        className,
        'inline-flex items-center rounded-full border p-1',
      )}
      {...props}
    >
      <button
        aria-label="light"
        className={cn(
          theme === 'light'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground',
          'flex cursor-pointer items-center justify-center rounded-full p-1.5',
        )}
        onClick={() => setTheme('light')}
      >
        <SunIcon className="size-4" />
      </button>
      <button
        aria-label="dark"
        className={cn(
          theme === 'dark'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground',
          'flex cursor-pointer items-center justify-center rounded-full p-1.5',
        )}
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="size-4" />
      </button>
      <button
        aria-label="system"
        className={cn(
          theme === 'system'
            ? 'bg-accent text-accent-foreground'
            : 'text-muted-foreground',
          'flex cursor-pointer items-center justify-center rounded-full p-1.5',
        )}
        onClick={() => setTheme('system')}
      >
        <ComputerIcon className="size-4" />
      </button>
    </div>
  );
};
