import { Col, Row } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../atoms';
import { PageTitle } from '../../molecules';
import { FilterSearch } from '../../organisms';
import { MainTemplate } from '../../templates';

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
            title="Users"
            subtitle="Use users menu to manage users and roles"
            button1={<Button type="secondary">Role List</Button>}
            button2={<Button type="primary">New User</Button>}
          />
        </Col>
        <Col span={24}>
          <FilterSearch
            inputProps={{
              placeholder: 'Search by name, email or phone number',
            }}
            selectProps={{
              placeholder: 'Select',
              options,
              style: { display: 'block' },
            }}
            additionalSelectProps={{
              placeholder: 'Additional Select 1',
              options,
            }}
          />
        </Col>
        <Col span={24}>Hello from Home</Col>
      </Row>
    </MainTemplate>
  );
};

export default Index;
