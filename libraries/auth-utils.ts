import { headers } from 'next/headers';

import { auth } from '@/libraries/auth-api';

export const getSessionOnServer = async () => {
  const headersStore = await headers();
  const session = await auth.api.getSession({ headers: headersStore });
  return session;
};
