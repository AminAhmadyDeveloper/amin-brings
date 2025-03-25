import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { Loader2 } from 'lucide-react';
import React from 'react';

import { cn } from '@/libraries/tailwind-utils';

const spinnerVariants = cva('flex-col items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva('animate-spin', {
  variants: {
    size: {
      'extra-small': 'size-4',
      small: 'size-6',
      medium: 'size-8',
      large: 'size-12',
    },
    variant: {
      primary: 'text-primary',
      'primary-foreground': 'text-primary-foreground',
    },
  },
  defaultVariants: {
    size: 'extra-small',
    variant: 'primary',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Spinner({
  size,
  show,
  variant,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2 className={cn(loaderVariants({ size, variant }), className)} />
      {children}
    </span>
  );
}
