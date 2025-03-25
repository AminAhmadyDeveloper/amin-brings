'use client';

import { httpBatchLink } from '@trpc/client';
import { readSSROnlySecret } from 'ssr-only-secrets';
import SuperJSON from 'superjson';

import { createTRPCReact } from '@trpc/react-query';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { getUrl } from '@/libraries/server-utils';
import { getQueryClient } from '@/libraries/tanstack-query-utils';
import { TanstackQueryProvider } from '@/providers/tanstack-query-provider';
import type { AppRouter } from '@/trpc';

export const trpc = createTRPCReact<AppRouter>();

const queryClient = getQueryClient();

export interface TRPCProviderProps extends PropsWithChildren {
  ssrOnlySecret: string;
}

export const TRPCProvider: FC<TRPCProviderProps> = ({
  children,
  ssrOnlySecret,
}) => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: SuperJSON,
          url: getUrl(['api', 'trpc']),
          async headers() {
            const headers = new Headers();
            const secret = ssrOnlySecret;
            const value = await readSSROnlySecret(
              secret,
              'SECRET_CLIENT_COOKIE_VAR',
            );
            headers.set('x-trpc-source', 'nextjs-react');
            if (value) headers.set('cookie', value);
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
