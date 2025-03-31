'use client';

import { AuthCard } from '@daveyplate/better-auth-ui';

import type { FC } from 'react';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Logo } from '@/components/svg/logo';

export const AuthenticationView: FC<{ pathname: string }> = ({ pathname }) => {
  const router = useRouter();

  useEffect(() => router.refresh(), [router]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Logo className="mb-4 h-16 w-16" />
      <h1 className="mb-4 text-2xl font-bold">Amin Brings</h1>
      <p className="text-muted-foreground mb-8 text-center text-sm">
        Your one-stop solution for all your apps.
      </p>
      <AuthCard pathname={pathname} />
    </div>
  );
};
