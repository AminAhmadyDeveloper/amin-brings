'use client';

import { MenuSquareIcon, StarIcon } from 'lucide-react';
import { type FC, Fragment } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { For } from '@/components/utils/for';
import { Show } from '@/components/utils/show';
import { Switcher } from '@/components/utils/switcher';
import { cn } from '@/libraries/tailwind-utils';
import { useSession } from '@/providers/session-provider';

const routes: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
] as const;

interface HeaderProps {
  hideNavigationMenu?: true;
  className?: string;
}

export const Header: FC<HeaderProps> = ({ hideNavigationMenu, className }) => {
  const session = useSession();

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
            className="flex items-center justify-center text-xl font-medium"
            href="/"
          >
            <StarIcon className="me-2 size-5" />
            Amin Brings
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
            <Switcher next={!!session?.session}>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Fragment />
            </Switcher>
          </div>
        </div>
      </header>
    </div>
  );
};
