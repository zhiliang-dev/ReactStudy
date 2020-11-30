import React from 'react';
import Login from '../views/login';
import Home from '../views/home';

const routeData = [
  {
    name: '登录',
    path: '/auth/login',
    exact: true,
    component: Login,
  },
  {
    name: '主页',
    path: '/home',
    exact: false,
    component: Home,
  },
];

export default routeData;
