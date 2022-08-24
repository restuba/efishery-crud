import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../atoms';
import { PageTitle } from '../../molecules';
import { FilterSearch } from '../../organisms';
import { MainTemplate } from '../../templates';
import Content from './content';
import dummy from './dummy.json';
import { pageOptions } from '../../../configs';
import CreateCommodity from './createCommodity';

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
  const [pageSize, setPageSize] = useState(pageOptions[0]);
  // eslint-disable-next-line no-unused-vars
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const onShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const onCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const list = dummy;
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
            button1={
              <Button type="primary" onClick={onShowCreateModal}>
                Create Commodity
              </Button>
            }
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
          <Content
            dataSource={list}
            pageSize={pageSize}
            setPageSize={setPageSize}
            keyword={keyword}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalData={list?.length}
          />
        </Col>
        <CreateCommodity
          isShow={showCreateModal}
          onClose={onCloseCreateModal}
        />
      </Row>
    </MainTemplate>
  );
};

export default Index;
