import React from 'react';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../atoms';
import { PageTitle } from '../../molecules';
import { FilterSearch } from '../../organisms';
import { MainTemplate } from '../../templates';
import Content from './content';

const options = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
];

const Index = () => {
  return (
    <MainTemplate>
      <Helmet>
        <title>Home - eFishery</title>
      </Helmet>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <PageTitle
            title="Page title"
            subtitle="Page description"
            button1={<Button type="secondary">Button 1</Button>}
            button2={<Button type="primary">Button 2</Button>}
          />
        </Col>
        <Col span={24}>
          <FilterSearch
            inputProps={{
              placeholder: 'Search',
            }}
            selectProps={{
              placeholder: 'Select',
              options,
            }}
            additionalSelectProps={{
              placeholder: 'Additional Select 1',
              options,
            }}
          />
        </Col>
        <Col span={24}>
          <Content />
        </Col>
        <Col span={24}>Hello from Home</Col>
      </Row>
    </MainTemplate>
  );
};

export default Index;
