'use client';

import { LogOutIcon } from 'lucide-react';

import { Logout } from '@/app/(authentication)/_components/log-out';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useUserProfile } from '@/hooks/use-user-profile';

export const ProfileDropDown = () => {
  const user = useUserProfile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full">
        <Avatar>
          <AvatarImage src={user.avatarUrl} alt={user.displayName} />
          <AvatarFallback
            className="rounded-lg"
            dangerouslySetInnerHTML={{ __html: user.avatarSvg }}
          />
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side="bottom"
        align="end"
        dir="rtl"
        sideOffset={4}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar className="size-8 rounded-lg">
              <AvatarImage src={user.avatarUrl} alt={user.displayName} />
              <AvatarFallback
                className="rounded-lg"
                dangerouslySetInnerHTML={{ __html: user.avatarSvg }}
              />
            </Avatar>
            <div className="grid flex-1 gap-y-1 text-right text-sm leading-tight">
              <span className="truncate font-semibold">{user.displayName}</span>
              <span className="truncate text-xs">{user.phoneNumber}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Logout className="flex w-full justify-start gap-x-3" variant="ghost">
            <LogOutIcon className="size-4" />
            خروج
          </Logout>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
