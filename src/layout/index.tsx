import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import './index.css';

function Layout() {
  NProgress.configure({ showSpinner: false });
  NProgress.start();

  useEffect(() => {
    NProgress.done();
  });
  return <div />;
}

export default Layout;
