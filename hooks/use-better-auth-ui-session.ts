import type { auth } from '@/libraries/auth-api';
import { getQueryClient } from '@/libraries/tanstack-query-utils';

export const useBetterAuthUiSession = () => {
  const queryClient = getQueryClient();
  const session = queryClient.getQueryData<Awaited<
    ReturnType<typeof auth.api.getSession>
  > | null>(['session']);

  return session;
};
