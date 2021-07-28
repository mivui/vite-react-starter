import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';

ReactDOM.render(
  <React.StrictMode>
    <Router>{renderRoutes(routes)}</Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
