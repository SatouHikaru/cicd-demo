import React, { Suspense } from 'react'
import { Switch } from 'react-router-dom'

// routes config
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  return (
    <Suspense fallback={loading}>
      <Switch>
        {routes.map((route, idx) => {
          return (
            route?.public ? (
              <PublicRoute
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            ) : (
              <PrivateRoute
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                component={route.component}
              />
            )
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default React.memo(TheContent);
