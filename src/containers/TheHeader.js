import React from 'react';
import Cookies from 'js-cookie';
import { resetToken } from '../api';
import '../scss/_header.scss';
import { useHistory } from 'react-router-dom';

const TheHeader = (props) => {
  const accessToken = Cookies.get('access_token');
  const history = useHistory();

  const handleLogout = () => {
    resetToken();
    Cookies.remove('access_token')
    history.push({ pathname: '/login' });
  }

  return (
    !!accessToken && (
      <div className="header">
        <button
          className="btn-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    )
  )
}

export default TheHeader;
