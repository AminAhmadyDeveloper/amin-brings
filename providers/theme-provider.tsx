'use client';

import type { ComponentProps, FC } from 'react';

import { ThemeProvider as ThemeProviderPrimitive } from 'next-themes';

export const ThemeProvider: FC<
  ComponentProps<typeof ThemeProviderPrimitive>
> = (props) => {
  return <ThemeProviderPrimitive {...props} />;
};
