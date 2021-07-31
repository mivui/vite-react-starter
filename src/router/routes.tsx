import React from 'react';
import { RouteConfig } from 'react-router-config';
import App from '@/pages/App';
import HelloWord from '@/pages/HelloWord';
import { Redirect } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="helloWord" />,
      },
      {
        path: '/helloWord',
        exact: true,
        meta: { title: '你好世界' },
        component: HelloWord,
      },
      {
        path: '*',
        meta: { title: '404' },
        component: NotFound,
      },
    ],
  },
];
export default routes;
