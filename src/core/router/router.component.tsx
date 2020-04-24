import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRouterComponent } from 'common-app/auth';
import { routes } from './routes';
import { LoginScene, TimeScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[routes.root, routes.login]}
          component={LoginScene}
        />
        <AuthRouterComponent
          exact={true}
          path={routes.time}
          component={TimeScene}
        />
      </Switch>
    </HashRouter>
  );
};
