import React from 'react';
import { colors } from '../../../configs';
import { Typography } from '../../atoms';
import Wrapper from './style';

const initialValues = {
  responsive: {
    sm: {
      height: 344,
    },
    md: {
      height: 640,
    },
  },
};

const Index = (props) => {
  const { desc, title = 'Empty title', responsiveProps = {} } = props;
  const responsive = { ...initialValues.responsive, ...responsiveProps };

  return (
    <Wrapper responsive={responsive}>
      <div className="container_empty_results">
        <Typography color={colors.primary} size={{ sm: 1.6, md: 2 }}>
          {title}
        </Typography>
        <Typography color={colors.dark2} hidden={!desc}>
          {desc}
        </Typography>
      </div>
    </Wrapper>
  );
};

export default Index;
