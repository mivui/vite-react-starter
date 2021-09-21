import { BrowserRouter as Router, Routes } from 'react-router-dom';
import publicRouter from './public-router';

function router() {
  return (
    <Router>
      <Routes>{publicRouter()}</Routes>
    </Router>
  );
}

export default router;
