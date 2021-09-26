import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Page from './Page';

import { HomePage } from '../pages';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Page path="/" exact title="Home | ShopyMania" component={HomePage} />
      <Page path="/2" exact title="Home 2 | ShopyMania" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
