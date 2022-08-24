import React from 'react';
import PropsTypes from 'prop-types';
import Button from './style';

const Index = (props) => {
  const { children, type, minWidth, ...otherProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Button type={type} min_width={minWidth} {...otherProps}>
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
