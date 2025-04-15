import { type FC, Fragment, type PropsWithChildren, Suspense } from 'react';

import { DashboardHeader } from '@/app/dashboard/_components/dashboard-header';
import { DashboardSidebar } from '@/app/dashboard/_components/dashboard-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { UploadthingSsPluginProvider } from '@/providers/uploadthing-ssr-plugin-provider';

const DashboardLayout: FC<PropsWithChildren> = async ({ children }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardHeader />
        <Suspense fallback={<Fragment />}>
          <UploadthingSsPluginProvider />
        </Suspense>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
