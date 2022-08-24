import React from 'react';
import PropsTypes from 'prop-types';
import Button from './style';

const Index = (props) => {
  const { children, type, minWidth } = props;
  return (
    <Button type={type} min_width={minWidth}>
      {children}
    </Button>
  );
};

Index.propTypes = {
  type: PropsTypes.string,
};

Index.defaultProps = {
  type: 'primary',
};

export default Index;
