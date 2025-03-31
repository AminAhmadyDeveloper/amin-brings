'use client';

import { AuthUIProviderTanstack } from '@daveyplate/better-auth-ui/tanstack';

import type { FC, PropsWithChildren } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { authClient } from '@/libraries/auth-client';

export const BetterAuthUiProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  return (
    <AuthUIProviderTanstack
      authClient={authClient}
      navigate={router.push}
      replace={router.replace}
      onSessionChange={router.refresh}
      LinkComponent={Link}
      basePath="/authentication"
    >
      {children}
    </AuthUIProviderTanstack>
  );
};
