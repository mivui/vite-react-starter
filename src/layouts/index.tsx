import { useEffect } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './index.css';

function Layouts(props: RouteConfigComponentProps) {
  const { route } = props;

  NProgress.configure({ showSpinner: false });
  NProgress.start();

  useEffect(() => {
    NProgress.done();
  });

  return <>{route ? renderRoutes(route.routes) : null}</>;
}

export default Layouts;
