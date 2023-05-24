import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();
  const isAuthenticated = !!Cookies.get('access_token');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.push({ pathname: '/users' });
    }
  }, [isAuthenticated, history]);

  return (
    <div className="content-wrapper">
      <Route {...rest} render={(props) => <Component {...props} />} />
    </div>
  )
}

export default PublicRoute
