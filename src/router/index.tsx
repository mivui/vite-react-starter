import React from 'react';
import { RouteConfig } from 'react-router-config';
import App from '@/pages/App';
import HelloWord from '@/pages/HelloWord';
import { Redirect } from 'react-router-dom';

const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="helloWord" />,
      },
      {
        path: '/helloWord',
        component: HelloWord,
      },
    ],
  },
];
export default routes;
