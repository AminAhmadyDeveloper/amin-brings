import type { AutoFormFieldProps } from '@autoform/react';
import React from 'react';

import { Input } from '@/components/ui/input';

export const NumberField: React.FC<AutoFormFieldProps> = ({
  inputProps,
  error,
  id,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key, ...props } = inputProps;

  return (
    <Input
      id={id}
      type="number"
      className={error ? 'border-destructive' : ''}
      {...props}
    />
  );
};
