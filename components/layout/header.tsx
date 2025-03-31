'use client';

import { UserButton } from '@daveyplate/better-auth-ui';

import { MenuSquareIcon } from 'lucide-react';
import type { FC } from 'react';

import Link from 'next/link';

import { Logo } from '@/components/svg/logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { For } from '@/components/utils/for';
import { Show } from '@/components/utils/show';
import { cn } from '@/libraries/tailwind-utils';

const routes: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
] as const;

interface HeaderProps {
  hideNavigationMenu?: true;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ hideNavigationMenu, className }) => {
  return (
    <div className="bg-background/5 sticky top-0 z-50 border-b backdrop-blur-lg">
      <header className={cn(className, 'px-2 py-4 transition-all lg:py-4')}>
        <div className="flex items-center gap-2 p-0">
          <Show show={!hideNavigationMenu}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="focus:ring-1 focus:outline-none md:hidden"
                  size="icon"
                  variant="outline"
                >
                  <MenuSquareIcon className="size-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <div className="py-1">
                  <For each={routes}>
                    {(route) => {
                      return (
                        <DropdownMenuItem key={route.name} asChild>
                          <Link href={route.href}>{route.name}</Link>
                        </DropdownMenuItem>
                      );
                    }}
                  </For>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </Show>
          <Link
            className="flex items-center justify-center font-mono text-xl font-medium"
            href="/"
          >
            <Logo className="me-2 size-5" />
            <span>Amin Brings</span>
          </Link>
          <Show show={!hideNavigationMenu}>
            <nav className="ms-10 hidden gap-4 sm:gap-6 md:flex">
              <For each={routes}>
                {(route) => {
                  return (
                    <Link
                      key={route.name}
                      className="hover:text-muted-foreground text-sm font-medium transition-colors"
                      href={route.href}
                    >
                      {route.name}
                    </Link>
                  );
                }}
              </For>
            </nav>
          </Show>
          <div className="ms-auto flex gap-2">
            <UserButton
              className="size-9 text-xs"
              classNames={{
                content: {
                  avatar: {
                    base: 'size-9 text-xs',
                  },
                },
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
};
