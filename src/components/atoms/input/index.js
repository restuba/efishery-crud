import React from 'react';
import Input from './style';

const Index = (props) => {
  const { placeholder, ...otherProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Input placeholder={placeholder} {...otherProps} />
  );
};

export default Index;
