import React from 'react';
import { Badge, Col, ConfigProvider, Row } from 'antd';
import { useMediaQuery as UseMediaQuery } from 'react-responsive';
import {
  ActionMenus,
  EmptyResult,
  List,
  Pagination,
  Table,
} from '../../molecules';
import columns from './content.column';
import { breakpoints, colors, pageOptions, pagination } from '../../../configs';
import { Typography } from '../../atoms';
import { toCurrency } from '../../../utils/commons';
import actions from './content.action';

const content = (props) => {
  const {
    isLoading,
    keyword,
    dataSource,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    totalData,
    onShowEditCommodity,
    onShowDeleteModal,
    setSelectedCommodity,
  } = props;

  const mediumScreen = UseMediaQuery({
    query: `(min-width: ${breakpoints.md})`,
  });

  const onChangePageSize = (page) => {
    setCurrentPage(page - 1);
  };

  return (
    <ConfigProvider
      renderEmpty={() => {
        if (keyword?.length > 0) {
          return (
            <EmptyResult
              title={`"${keyword}" not found`}
              desc="Please search use another keyword"
            />
          );
        }
        return (
          <EmptyResult
            title="Commodity list is empty"
            desc="You don't have a list of commodities"
          />
        );
      }}
    >
      <Row gutter={[24, 24]}>
        <Col span={24}>
          {mediumScreen ? (
            <Table
              loading={isLoading}
              dataSource={dataSource}
              columns={columns({
                onShowEditCommodity,
                onShowDeleteModal,
                setSelectedCommodity,
              })}
              rowKey="uuid"
              pagination={pagination(pageSize)}
              rowClassName={(record) => {
                if (!record?.uuid) {
                  return 'inactive';
                }
                return 'pointer';
              }}
            />
          ) : (
            <List
              loading={isLoading}
              dataSource={dataSource}
              id="uuid"
              pagination={pagination(pageSize)}
              renderItem={(record) => {
                return (
                  <List.Item key={record?.uuid} title={record?.komoditas}>
                    <Col span={24}>
                      <Row gutter={[4, 4]}>
                        <Col span={24}>
                          <Row justify="space-between">
                            <Col span={16}>
                              <Row>
                                <Col span={24}>
                                  <Typography
                                    weight={700}
                                    color={colors.primary}
                                  >
                                    {record?.komoditas}
                                  </Typography>
                                </Col>
                                <Col span={24}>
                                  <Typography size={{ sm: 14 }} unit="px">
                                    {`${record?.area_kota} / ${record?.area_provinsi}`}
                                  </Typography>
                                </Col>
                              </Row>
                            </Col>
                            <Col>
                              <ActionMenus
                                items={actions({
                                  record,
                                  onShowEditCommodity,
                                  onShowDeleteModal,
                                  setSelectedCommodity,
                                })}
                                minWidth={200}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col span={24}>
                          <Row justify="space-between">
                            <Col>
                              <Badge color="">
                                <Typography>{`Size: ${record?.size}`}</Typography>
                              </Badge>
                            </Col>
                            <Col>
                              <Typography weight={500} color={colors.orange0}>
                                {toCurrency(record?.price, 'IDR')}
                              </Typography>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </List.Item>
                );
              }}
            />
          )}
        </Col>
        <Col span={24}>
          <Pagination
            total={totalData}
            pageSize={pageSize}
            setPageSize={setPageSize}
            current={currentPage + 1}
            options={pageOptions}
            onChange={onChangePageSize}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default content;
