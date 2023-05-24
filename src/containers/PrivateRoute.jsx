import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setToken } from '../api/index'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = Cookies.get('access_token');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  useEffect(() => {
    if (!!isAuthenticated) {
      setToken(isAuthenticated);
    }
  }, [isAuthenticated]);

  return (
    <Route
      {...rest}
      render={(props) =>
        !!isAuthenticated ? (
          <div className="content-wrapper">
            <Component {...props} />
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
