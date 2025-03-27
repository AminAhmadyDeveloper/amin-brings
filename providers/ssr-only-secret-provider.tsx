'use client';

import { createContext, useContext, useState } from 'react';

interface SSROnlySecretContextType {
  ssrOnlySecret: string | null;
  setSSROnlySecret: (secret: string | null) => void;
}

const SSROnlySecretContext = createContext<SSROnlySecretContextType | null>(
  null,
);

export const SSROnlySecretProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ssrOnlySecret, setSSROnlySecret] = useState<string | null>(null);

  return (
    <SSROnlySecretContext.Provider value={{ ssrOnlySecret, setSSROnlySecret }}>
      {children}
    </SSROnlySecretContext.Provider>
  );
};

export const useSSROnlySecret = () => {
  const context = useContext(SSROnlySecretContext);
  if (!context) {
    throw new Error(
      'useSSROnlySecret must be used within SSROnlySecretProvider',
    );
  }
  return context;
};
