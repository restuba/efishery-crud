import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menus from './menus';
import Navigation from './style';

const Index = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navigation
      mode="horizontal"
      selectedKeys={pathname}
      onClick={(item) => {
        navigate(item.key);
      }}
      items={menus}
    />
  );
};

export default Index;
