import type { NextPage } from 'next';

import { Frameworks } from '@/app/dashboard/(root)/_components/frameworks';
import { TrendingChart } from '@/app/dashboard/(root)/_components/trending-chart';

const DashboardPage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <TrendingChart />
      <Frameworks />
    </div>
  );
};

export default DashboardPage;
