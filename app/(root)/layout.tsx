import { type FC, Fragment, type PropsWithChildren } from 'react';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer className="container" />
    </Fragment>
  );
};

export default MainLayout;
