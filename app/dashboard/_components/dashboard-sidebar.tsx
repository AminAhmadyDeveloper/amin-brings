'use client';

import filter from 'lodash.filter';
import includes from 'lodash.includes';

import {
  CaretRightIcon,
  GearIcon,
  PaperPlaneIcon,
  PieChartIcon,
} from '@radix-ui/react-icons';
import type { IconProps } from '@radix-ui/react-icons/dist/types';
import { LifeBuoyIcon } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Fragment } from 'react';

import Link from 'next/link';

import { useActiveMenus } from '@/app/dashboard/_hooks/use-active-menus';
import { type ActivePath } from '@/app/dashboard/_hooks/use-active-path';
import { Logo } from '@/components/svg/logo';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { For } from '@/components/utils/for';
import { Switcher } from '@/components/utils/switcher';
import { cn } from '@/libraries/tailwind-utils';

export type AppSidebarItem = {
  [key in 'navMain' | 'navSecondary']: {
    title: ActivePath['title'];
    href: ActivePath['path'];
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
    isActive?: true;
    children?: {
      title: ActivePath['title'];
      href: ActivePath['path'];
    }[];
  }[];
};

export const dashboardSidebarData: AppSidebarItem = {
  navMain: [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: PieChartIcon,
    },
    {
      title: 'Account',
      href: '/dashboard/account/my-information',
      icon: GearIcon,
      children: [
        {
          title: 'My Information',
          href: '/dashboard/account/my-information',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Support',
      href: '/support',
      icon: LifeBuoyIcon,
    },
    {
      title: 'Feedback',
      href: '/feedback',
      icon: PaperPlaneIcon,
    },
  ],
};

export const DashboardSidebar = () => {
  const { activeMenus, setActiveMenus, path } = useActiveMenus();

  return (
    <Fragment>
      <Sidebar variant="inset" side="left">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="/">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Logo className="!text-sidebar-primary-foreground size-5" />
                  </div>
                  <div className="grid flex-1 text-start text-sm leading-tight">
                    <span className="truncate font-semibold">Amin Brings</span>
                    <span className="truncate text-xs">Dashboard Page</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
              <For each={dashboardSidebarData.navMain}>
                {(item) => {
                  return (
                    <Collapsible
                      key={item.title}
                      asChild
                      open={includes(activeMenus, item.href)}
                      onOpenChange={() => {
                        if (includes(activeMenus, item.href)) {
                          setActiveMenus((prev) =>
                            filter(prev, (_menu) => _menu !== item.href),
                          );
                        } else {
                          setActiveMenus((prev) => [...prev, item.href]);
                        }
                      }}
                    >
                      <SidebarMenuItem>
                        <Switcher next={!!item.children?.length}>
                          <SidebarMenuButton asChild tooltip={item.title}>
                            <Link
                              href={item.href}
                              className={cn(
                                item.href === path
                                  ? 'text-sidebar-primary'
                                  : '',
                              )}
                            >
                              <item.icon className="size-6" />
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                          <Fragment>
                            <CollapsibleTrigger asChild className="group">
                              <div>
                                <SidebarMenuButton asChild tooltip={item.title}>
                                  <button>
                                    <item.icon className="size-6" />
                                    <span>{item.title}</span>
                                  </button>
                                </SidebarMenuButton>
                                <SidebarMenuAction className="group-data-[state=open]:-rotate-90">
                                  <CaretRightIcon className="size-6" />
                                  <span className="sr-only">Toggle</span>
                                </SidebarMenuAction>
                              </div>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                              <SidebarMenuSub className="border-r-0 border-l">
                                <For each={item.children}>
                                  {(subItem) => {
                                    return (
                                      <SidebarMenuSubItem key={subItem.title}>
                                        <SidebarMenuSubButton
                                          asChild
                                          className={cn(
                                            subItem.href === path
                                              ? 'text-sidebar-primary'
                                              : '',
                                          )}
                                        >
                                          <Link href={subItem.href}>
                                            <span>{subItem.title}</span>
                                          </Link>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                    );
                                  }}
                                </For>
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          </Fragment>
                        </Switcher>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }}
              </For>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup className="mt-auto">
            <SidebarGroupContent>
              <SidebarMenu>
                <For each={dashboardSidebarData.navSecondary}>
                  {(item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild size="sm">
                        <Link href={item.href}>
                          <item.icon className="size-6" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </For>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Fragment>
  );
};
