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
import EditCommodity from './editCommodity';
import DeleteCommodity from './deleteCommodity';

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
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedCommodity, setSelectedCommodity] = useState({});

  const onShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const onCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const onShowEditCommodity = () => {
    setShowEditModal(true);
  };

  const onCloseEditModal = () => {
    setShowEditModal(false);
  };

  const onShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const onCloseDeleteModal = () => {
    setShowDeleteModal(false);
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
            onShowEditCommodity={onShowEditCommodity}
            setSelectedCommodity={setSelectedCommodity}
            onShowDeleteModal={onShowDeleteModal}
          />
        </Col>
        <CreateCommodity
          isShow={showCreateModal}
          onClose={onCloseCreateModal}
        />
        <EditCommodity
          isShow={showEditModal}
          onClose={onCloseEditModal}
          selectedCommodity={selectedCommodity}
        />
        <DeleteCommodity
          isShow={showDeleteModal}
          onClose={onCloseDeleteModal}
          selectedCommodity={selectedCommodity}
        />
      </Row>
    </MainTemplate>
  );
};

export default Index;
