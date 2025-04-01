import includes from 'lodash.includes';
import map from 'lodash.map';

import { useEffect, useState } from 'react';

import { dashboardSidebarData } from '@/app/dashboard/_components/dashboard-sidebar';
import type { ActivePath } from '@/app/dashboard/_hooks/use-active-path';
import { useActivePath } from '@/app/dashboard/_hooks/use-active-path';

export const useActiveMenus = () => {
  const { path } = useActivePath();
  const [activeMenus, setActiveMenus] = useState<ActivePath['path'][]>([]);

  useEffect(() => {
    dashboardSidebarData.navMain.forEach((nav) => {
      if (nav.children?.length) {
        const isChildActive = includes(
          map(nav.children, ({ href }) => href),
          path,
        );

        if (isChildActive) {
          setActiveMenus((prev) => [...prev, nav.href]);
        }
      }
    });
  }, [path]);

  return { activeMenus, setActiveMenus, path };
};
