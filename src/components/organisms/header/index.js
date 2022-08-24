import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../molecules';
import { logoEFishery } from '../../../assets';
import Wrapper, { MainHeader } from './style';

const Index = () => {
  return (
    <Wrapper>
      <div className="component_header">
        <MainHeader>
          <Link to="/">
            <img
              src={logoEFishery}
              alt="eFishery logo"
              className="component_logo"
            />
          </Link>
        </MainHeader>
        <Navigation />
      </div>
    </Wrapper>
  );
};

export default Index;
