import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Router from '~/router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
