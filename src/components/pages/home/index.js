import { Col, Row } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../atoms';
import { PageTitle } from '../../molecules';
import { MainTemplate } from '../../templates';

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
        <Col span={24}>Hello from Home</Col>
      </Row>
    </MainTemplate>
  );
};

export default Index;
