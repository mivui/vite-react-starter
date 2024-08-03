import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Router from '~/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
