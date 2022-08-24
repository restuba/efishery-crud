/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menus from './menus';
import Navigation from './style';

const Index = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Navigation
      mode="horizontal"
      onClick={(item) => {
        const { key } = item;
        navigate(key);
      }}
    >
      {menus.map((item) => {
        return <Navigation.Item key={item.key}>{item.label}</Navigation.Item>;
      })}
    </Navigation>
  );
};

export default Index;
