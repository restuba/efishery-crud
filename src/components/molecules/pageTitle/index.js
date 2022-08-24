import React from 'react';
import { Typography } from '../../atoms';
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
        <Typography tag="h4" block size={{ sm: 1.4, md: 1.6 }}>
          {title}
        </Typography>
        <Typography tag="p" block size={{ sm: 14, md: 14 }} unit="px">
          {subtitle}
        </Typography>
      </div>
      <div className="components_page_title_additional">
        {button1}
        {button2}
      </div>
    </Wrapper>
  );
};

export default Index;
