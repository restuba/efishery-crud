/* eslint-disable react/jsx-props-no-spreading */
import { Col, Row } from 'antd';
import React from 'react';
import { Input, Select } from '../../atoms';
import Wrapper from './style';

const Index = (props) => {
  const { inputProps, selectProps, additionalSelectProps, ...otherProps } =
    props;
  return (
    <Wrapper {...otherProps}>
      <Row justify="space-between" gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Input {...inputProps} />
        </Col>
        <Col xs={12} md={6}>
          <Select {...selectProps} allowClear showSearch />
        </Col>
        <Col xs={12} md={6}>
          <Select {...additionalSelectProps} allowClear showSearch />
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Index;
