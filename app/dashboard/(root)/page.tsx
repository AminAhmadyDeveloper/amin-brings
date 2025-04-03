import type { NextPage } from 'next';

import { Notes } from '@/app/dashboard/(root)/_components/notes';
import { TrendingChart } from '@/app/dashboard/(root)/_components/trending-chart';

const DashboardPage: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      <TrendingChart />
      <Notes />
    </div>
  );
};

export default DashboardPage;
