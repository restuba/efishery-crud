import { lazy } from 'react';
import { URL_GENERAL } from '../../configs';

const RouteComp = (lazyImport) => {
  const Component = lazy(() => {
    return lazyImport;
  });
  return <Component />;
};

const routes = [
  {
    path: URL_GENERAL.HOME,
    component: RouteComp(import('./home')),
    auth: false,
  },
];

export default routes;
