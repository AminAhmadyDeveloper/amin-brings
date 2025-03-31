import type { FC, PropsWithChildren } from 'react';

import { headers } from 'next/headers';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

import { Toaster } from '@/components/ui/sonner';
import { auth } from '@/libraries/auth-api';
import { mono, sans } from '@/libraries/font-utils';
import { cloakSSROnlySecret } from '@/libraries/ssr-only-secrets';
import { cn } from '@/libraries/tailwind-utils';
import { BetterAuthUiProvider } from '@/providers/better-auth-ui-provide';
import { ConfirmDialogProvider } from '@/providers/confirm-dialog-provider';
import { SessionProvider } from '@/providers/session-provider';
import { SSROnlySecretProvider } from '@/providers/ssr-only-secret-provider';
import { StylesProvider } from '@/providers/styles-provider';
import { ThemeProvider } from '@/providers/theme-provider';
import { TRPCProvider } from '@/providers/trpc-provider';

const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
  const headersStore = await headers();
  const session = await auth.api.getSession({ headers: headersStore });
  const cookie = new Headers(headersStore).get('cookie') ?? '';
  const encryptedCookie = await cloakSSROnlySecret(
    cookie,
    'SECRET_CLIENT_COOKIE_VAR',
  );

  return (
    <html
      lang="en"
      dir="ltr"
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className={cn(sans.variable, mono.variable, 'antialiased')}>
        <StylesProvider />
        <SessionProvider session={session}>
          <ConfirmDialogProvider>
            <NuqsAdapter>
              <SSROnlySecretProvider>
                <TRPCProvider encryptedCookie={encryptedCookie}>
                  <BetterAuthUiProvider>
                    <ThemeProvider defaultTheme="dark">
                      {children}
                    </ThemeProvider>
                  </BetterAuthUiProvider>
                </TRPCProvider>
              </SSROnlySecretProvider>
            </NuqsAdapter>
          </ConfirmDialogProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
};

export * from '@/libraries/seo-utils';

export default RootLayout;
