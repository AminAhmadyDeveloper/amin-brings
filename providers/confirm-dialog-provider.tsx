'use client';

import { ConfirmDialogProvider as BaseConfirmDialogPrimitive } from '@/components/ui/confirm-dialog';
import type { ConfirmOptions } from '@/components/ui/confirm-dialog';

interface Props {
  children: React.ReactNode;
  defaultOptions?: ConfirmOptions;
}

export const ConfirmDialogProvider = ({ children, defaultOptions }: Props) => {
  return (
    <BaseConfirmDialogPrimitive defaultOptions={defaultOptions}>
      {children}
    </BaseConfirmDialogPrimitive>
  );
};
