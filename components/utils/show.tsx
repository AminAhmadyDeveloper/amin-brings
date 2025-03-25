import type { FC, PropsWithChildren } from 'react';

interface ActivateProps extends PropsWithChildren {
  show: boolean;
}

export const Show: FC<ActivateProps> = ({ show, children }) => {
  return show ? children : null;
};
