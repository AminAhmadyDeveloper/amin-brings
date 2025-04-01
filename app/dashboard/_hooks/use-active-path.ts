import concat from 'lodash.concat';
import find from 'lodash.find';
import map from 'lodash.map';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { dashboardSidebarData } from '@/app/dashboard/_components/dashboard-sidebar';

export interface ActivePath {
  title: 'Dashboard' | 'Account' | 'My Information' | 'Support' | 'Feedback';
  path:
    | '/dashboard'
    | '/dashboard/account/my-information'
    | '/support'
    | '/feedback';
}

const defaultActivePath: ActivePath = {
  path: '/dashboard',
  title: 'Dashboard',
};

export const useActivePath = () => {
  const [activePath, setActivePath] = useState<ActivePath>(defaultActivePath);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      const allPaths = concat(
        ...map(dashboardSidebarData.navMain, (item) => {
          if (item?.children?.length) {
            return item.children;
          } else {
            return [item];
          }
        }),
        dashboardSidebarData.navSecondary,
      );
      const active = find(allPaths, (item) => item.href === pathname);
      if (active) {
        setActivePath({
          path: active?.href,
          title: active?.title,
        });
      }
    }
  }, [pathname]);

  return activePath;
};
