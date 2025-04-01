import type { NextPage } from 'next';

import { TrendingChart } from '@/app/dashboard/(root)/_components/trending-chart';

const DashboardPage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <TrendingChart />
    </div>
  );
};

export default DashboardPage;
