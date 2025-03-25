'use client';

import * as VisuallyHiddenPrimitives from '@radix-ui/react-visually-hidden';
import * as React from 'react';

const VisuallyHidden = React.forwardRef<
  React.ComponentRef<typeof VisuallyHiddenPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof VisuallyHiddenPrimitives.Root>
>(({ ...props }, ref) => (
  <VisuallyHiddenPrimitives.Root {...props} ref={ref} />
));
VisuallyHidden.displayName = VisuallyHiddenPrimitives.Root.displayName;

export { VisuallyHidden };
