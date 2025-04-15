import type { NextPage } from 'next';

import { Frameworks } from '@/app/dashboard/(root)/_components/frameworks';
import { TrendingChart } from '@/app/dashboard/(root)/_components/trending-chart';
import { UploadDropzone } from '@/app/dashboard/(root)/_components/upload-dropzone';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <TrendingChart />
      <Frameworks />
      <Card>
        <CardContent>
          <UploadDropzone />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
