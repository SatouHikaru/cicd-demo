import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const resetToken = () => {
  api.defaults.headers.common.Authorization = '';
};

setToken();
