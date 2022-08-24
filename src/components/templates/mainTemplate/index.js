import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const { children, ...otherProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper {...otherProps}>{children}</Wrapper>
  );
};

export default Index;
