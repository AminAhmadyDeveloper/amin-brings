'use client';

import * as React from 'react';

import type { auth } from '@/libraries/auth-api';

export const SessionContext = React.createContext(
  {} as Awaited<ReturnType<typeof auth.api.getSession>> | null,
);

interface SessionProviderProps {
  session: Awaited<ReturnType<typeof auth.api.getSession>> | null;
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
  session,
}) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => React.useContext(SessionContext);
