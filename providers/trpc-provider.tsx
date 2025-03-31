'use client';

import { httpBatchLink } from '@trpc/client';
import SuperJSON from 'superjson';

import { createTRPCReact } from '@trpc/react-query';
import { useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { getUrl } from '@/libraries/server-utils';
import { readSSROnlySecret } from '@/libraries/ssr-only-secrets';
import { getQueryClient } from '@/libraries/tanstack-query-utils';
import { useSSROnlySecret } from '@/providers/ssr-only-secret-provider';
import { TanstackQueryProvider } from '@/providers/tanstack-query-provider';
import type { AppRouter } from '@/trpc';

export const trpc = createTRPCReact<AppRouter>();

const queryClient = getQueryClient();

export interface TRPCProviderProps extends PropsWithChildren {
  encryptedCookie: string;
}

export const TRPCProvider: FC<TRPCProviderProps> = ({
  children,
  encryptedCookie,
}) => {
  const { ssrOnlySecret, setSSROnlySecret } = useSSROnlySecret();

  useEffect(() => {
    if (encryptedCookie) {
      setSSROnlySecret(encryptedCookie);
    }
  }, [encryptedCookie, setSSROnlySecret]);

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: SuperJSON,
          url: getUrl(['api', 'trpc']),
          async headers() {
            const headers = new Headers();
            try {
              const secret = ssrOnlySecret;
              console.log({ secret });
              if (secret) {
                const value = await readSSROnlySecret(
                  secret,
                  'SECRET_CLIENT_COOKIE_VAR',
                );
                headers.set('x-trpc-source', 'nextjs-react');
                if (value) headers.set('cookie', value);
              }
              return headers;
            } catch (error) {
              console.warn(
                'Ignoring unsafe environment variable usage:',
                error,
              );
            }
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <TanstackQueryProvider client={queryClient}>
        {children}
      </TanstackQueryProvider>
    </trpc.Provider>
  );
};
