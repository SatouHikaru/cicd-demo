import React, { useState } from 'react';
import { api, setToken } from '../../../api';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

import './style.scss';
import {ENDPOINT} from "../../../contants";

const LoginScreen = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrMessage, setEmailErrMessage] = useState('');
  const [passwordErrMessage, setPasswordErrMessage] = useState('');
  const [loginErrMessage, setLoginErrMessage] = useState('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === "NumpadEnter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  }

  const handleSubmit = async () => {
    handleClearErrorMessage();
    const param = { email, password }
    const validate = validateValue(param);
    if (Object.keys(validate).length > 0) {
      if (validate?.email) {
        setEmailErrMessage(validate.email);
      }

      if (validate?.password) {
        setPasswordErrMessage(validate.password);
      }
      return;
    }

    try {
      const result = await api.post(ENDPOINT.AUTH.LOGIN, param);
      if (result.data?.data?.access_token) {
        setToken(result.data.data.access_token);
        Cookies.set('access_token', result.data.data.access_token);
        history.push({ pathname: '/users' });
      } else {
        setLoginErrMessage('The account or password is incorrect, please check again');
      }
    } catch (error) {
      setLoginErrMessage('Login failed');
    }
  };

  const validateValue = (params) => {
    const error = {};
    if (!params?.email) {
      error.email = 'Email is required';
    }

    if (!params?.password) {
      error.password = 'Password is required';
    }

    return error;
  };

  const handleClearErrorMessage = () => {
    setEmailErrMessage('');
    setPasswordErrMessage('');
    setLoginErrMessage('');
  };

  return (
    <div className="container">
      <div className="container-content">
        <div className="login-box">
          <span className="title">Login</span>
          <div className="input-box">
            <span>Email</span>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={onKeyDown}
            /> 
          </div>
          {!!emailErrMessage && (
            <span className="error-message">{emailErrMessage}</span>
          )}
          <div className="input-box">
            <span>Password</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={onKeyDown}
            /> 
          </div>
          {!!passwordErrMessage && (
            <span className="error-message">{passwordErrMessage}</span>
          )}
          {!!loginErrMessage && (
            <span className="error-message">{loginErrMessage}</span>
          )}
          <div className="action">
            <button
              className="btn-login"
              onClick={handleSubmit}
            >
              Login
            </button>
            <span>Do you have account?</span>
            <button className="btn-sign-up">
              Sign up here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
