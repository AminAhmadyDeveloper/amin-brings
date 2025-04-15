'use client';

import { UserButton } from '@daveyplate/better-auth-ui';

import { MenuIcon, XIcon } from 'lucide-react';
import { type FC, useEffect, useState } from 'react';

import Link from 'next/link';

import { Logo } from '@/components/svg/logo';
import { Button } from '@/components/ui/button';
import { For } from '@/components/utils/for';
import { cn } from '@/libraries/tailwind-utils';

const routes: { name: string; href: string }[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
] as const;

export const Header: FC<ReactHeader> = (props) => {
  const [menuState, setMenuState] = useState<'active' | 'no-active'>(
    'no-active',
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header {...props}>
      <nav data-state={menuState} className="fixed z-50 w-full px-2">
        <div
          className={cn(
            'container mx-auto mt-2 px-6 transition-all duration-300 lg:px-12',
            {
              'bg-background/50 max-w-7xl rounded-2xl border backdrop-blur-lg lg:px-5':
                isScrolled,
            },
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <div className="flex items-center gap-x-5">
                <div className="flex w-full flex-col space-y-3 lg:hidden">
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
                <Button
                  onClick={() =>
                    setMenuState((prev) => {
                      return prev === 'active' ? 'no-active' : 'active';
                    })
                  }
                  aria-label={
                    menuState == 'active' ? 'Close Menu' : 'Open Menu'
                  }
                  className="relative -m-2.5 -mr-4 block cursor-pointer rounded-full p-2.5 lg:hidden"
                  variant="secondary"
                >
                  <MenuIcon className="m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0" />
                  <XIcon className="absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100" />
                </Button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                <For each={routes}>
                  {(route) => {
                    return (
                      <li key={route.href}>
                        <Link
                          href={route.href}
                          className="text-muted-foreground block duration-150 hover:text-accent-foreground"
                        >
                          <span>{route.name}</span>
                        </Link>
                      </li>
                    );
                  }}
                </For>
              </ul>
            </div>

            <div className="bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <For each={routes}>
                    {(route) => {
                      return (
                        <li key={route.href}>
                          <Link
                            href={route.href}
                            className="text-muted-foreground block duration-150 hover:text-accent-foreground"
                          >
                            <span>{route.name}</span>
                          </Link>
                        </li>
                      );
                    }}
                  </For>
                </ul>
              </div>
              <div className="hidden w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:flex">
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
          </div>
        </div>
      </nav>
    </header>
  );
};
