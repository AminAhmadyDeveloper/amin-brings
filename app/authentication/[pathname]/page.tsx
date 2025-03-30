import { ArrowLeft } from 'lucide-react';
import React from 'react';

import type { NextPage } from 'next';
import Link from 'next/link';

import { AuthenticationView } from '@/app/authentication/[pathname]/_components/authentication-view';
import { Button } from '@/components/ui/button';

interface Params {
  pathname: string;
}

const AuthenticationPage: NextPage<{ params: Promise<Params> }> = async ({
  params,
}) => {
  return (
    <main className="flex min-h-screen grow flex-col items-center justify-center">
      <Button asChild variant="ghost" className="absolute top-4 left-4">
        <Link href="/">
          <ArrowLeft className="size-4" />
        </Link>
      </Button>
      <AuthenticationView pathname={(await params).pathname} />
    </main>
  );
};

export default AuthenticationPage;
