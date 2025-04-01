import { type FC, type PropsWithChildren } from 'react';

import { DashboardHeader } from '@/app/dashboard/_components/dashboard-header';
import { DashboardSidebar } from '@/app/dashboard/_components/dashboard-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
