import React from 'react';

import type { NextPage } from 'next';

import { AuthenticationView } from '@/app/authentication/[pathname]/_components/authentication-view';

interface Params {
  pathname: string;
}

const AuthenticationPage: NextPage<{ params: Promise<Params> }> = async ({
  params,
}) => {
  return (
    <main className="flex min-h-screen grow flex-col items-center justify-center">
      <AuthenticationView pathname={(await params).pathname} />
    </main>
  );
};

export default AuthenticationPage;
