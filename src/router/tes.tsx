import React from 'react';
import { Route, Switch } from 'react-router-dom';

const LzPage1 = React.lazy(() => import('@/pages/HelloWord'));
const LzPage2 = React.lazy(() => import('@/pages/NotFound'));
const LzPage3 = React.lazy(() => import('@/pages/NotFound'));

const RouterContainer: React.FC = () => (
  <>
    <React.Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route path="/page2" exact>
          <LzPage2 />
        </Route>
        <Route path="/page3">
          <LzPage3 />
        </Route>
        <Route path="/">
          <LzPage1 />
        </Route>
      </Switch>
    </React.Suspense>
  </>
);

export default RouterContainer;
