import 'nprogress/nprogress.css';
import './index.css';

import NProgress from 'nprogress';
import { useEffect } from 'react';

function Layout() {
  NProgress.configure({ showSpinner: false });
  NProgress.start();

  useEffect(() => {
    NProgress.done();
  });
  return <div />;
}

export default Layout;
