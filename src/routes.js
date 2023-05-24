import React from 'react';

const Login = React.lazy(() => import('./views/authentication/login/index'));
const UserListScreen = React.lazy(() => import('./views/user/list/index'));

const routes = [
  { public: true, path: '/login', name: 'Login', component: Login },
  { path: '/', name: 'UserList', component: UserListScreen },
  { path: '/users', name: 'UserList', component: UserListScreen },
];

export default routes;
