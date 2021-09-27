import { FC } from 'react';

import { LayoutContainer } from './styles';

const Layout: FC = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
