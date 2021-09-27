import { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Page from './Page';

import { HomePage, CartPage } from '../pages';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Page path="/" exact title="Home | ShopyMania" component={HomePage} />

      <Page
        path="/cart"
        exact
        title="Resumo do carrinho | ShopyMania"
        component={CartPage}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
