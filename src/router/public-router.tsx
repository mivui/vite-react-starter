import { Route, Navigate } from 'react-router-dom';
import Layout from '@/layout';
import HelloWord from '@/pages/HelloWord';
import NotFound from '@/pages/NotFound';

function PublicRouter() {
  return (
    <>
      <Route path="/" element={<Navigate to="/HelloWord" replace />} />
      <Route path="/HelloWord" element={<HelloWord />} />
      <Route path="/layout" element={<Layout />} />
      <Route path="/404" element={<NotFound />} />
    </>
  );
}
export default PublicRouter;
