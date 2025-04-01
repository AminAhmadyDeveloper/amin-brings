'use client';

import { UserButton } from '@daveyplate/better-auth-ui';

import type { FC } from 'react';

import Link from 'next/link';

import { useActivePath } from '@/app/dashboard/_hooks/use-active-path';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/libraries/tailwind-utils';

export const DashboardHeader: FC<ReactHeader> = ({ className, ...props }) => {
  const { title } = useActivePath();

  return (
    <header
      className={cn(
        className,
        'flex h-16 shrink-0 items-center justify-between gap-2 pe-3',
      )}
      {...props}
    >
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" id="open-side-bar" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
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
    </header>
  );
};
