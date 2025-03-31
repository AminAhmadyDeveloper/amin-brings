import { type FC, Fragment, type PropsWithChildren } from 'react';

const AuthenticationLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default AuthenticationLayout;
