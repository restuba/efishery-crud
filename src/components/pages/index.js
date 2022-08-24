import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';
import routes from './routes';
import { RootTemplate } from '../templates';
import { Header } from '../organisms';

export const Pages = () => {
  return (
    <RootTemplate>
      <Suspense fallback={<Spin className="component_loading_root" />}>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </RootTemplate>
  );
};
