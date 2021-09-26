import { ComponentType, FC, useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface PageProps extends RouteProps {
  title?: string;
  component: ComponentType;
}

const Page: FC<PageProps> = ({
  title = 'ShopyMania',
  component: Component,
  ...rest
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Route {...rest} render={() => <Component />} />;
};

export default Page;
