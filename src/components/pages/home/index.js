import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Button } from '../../atoms';
import { PageTitle } from '../../molecules';
import { FilterSearch } from '../../organisms';
import { MainTemplate } from '../../templates';
import Content from './content';
import { pageOptions } from '../../../configs';
import CreateCommodity from './createCommodity';
import EditCommodity from './editCommodity';
import DeleteCommodity from './deleteCommodity';
import { areaService, commodityService } from '../../../services';
import { getArrayUniqueByKey } from '../../../utils';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(pageOptions[0]);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedCommodity, setSelectedCommodity] = useState({});
  const [commodityList, setCommodityList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    commodityService
      .getListCommodity({
        offset: currentPage * pageSize,
        limit: pageSize,
        keyword,
      })
      .then((res) => {
        setCommodityList(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [keyword, currentPage, pageSize]);

  useEffect(() => {
    areaService.getListArea().then((res) => {
      setProvinceList(
        getArrayUniqueByKey(
          res.map((item) => {
            return {
              value: item?.province,
              label: item?.province,
            };
          }),
          'value'
        )
      );
      setCityList(
        getArrayUniqueByKey(
          res.map((item) => {
            return {
              value: item?.city,
              label: item?.city,
              province: item?.province,
            };
          }),
          'value'
        )
      );
    });
  }, []);

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

  const onSearch = (e) => {
    setTimeout(() => {
      setKeyword(e.target.value);
    }, 1000);
  };

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
              placeholder: 'Search commodity by name',
              onChange: onSearch,
              allowClear: true,
            }}
            selectProps={{
              placeholder: 'Filter by province',
              options: provinceList,
            }}
            additionalSelectProps={{
              placeholder: 'Filter by city',
              options: cityList,
            }}
          />
        </Col>
        <Col span={24}>
          <Content
            isLoading={isLoading}
            dataSource={commodityList}
            pageSize={pageSize}
            setPageSize={setPageSize}
            keyword={keyword}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalData={commodityList?.length}
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
