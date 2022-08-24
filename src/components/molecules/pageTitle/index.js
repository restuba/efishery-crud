import React from 'react';
import Wrapper from './style';

const Index = (props) => {
  const {
    title = 'Page Title',
    subtitle = 'Page Subtitle',
    button1,
    button2,
  } = props;
  return (
    <Wrapper>
      <div className="components_page_title_main">
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </div>
      <div className="components_page_title_additional">
        {button1}
        {button2}
      </div>
    </Wrapper>
  );
};

export default Index;
