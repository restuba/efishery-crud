import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <div className="component_page_template_children">{children}</div>
    </Wrapper>
  );
};

export default Index;
