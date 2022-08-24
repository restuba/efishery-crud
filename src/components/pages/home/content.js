import React from 'react';
import { ConfigProvider } from 'antd';
import { EmptyResult, Pagination, Table } from '../../molecules';
import columns from './content.column';
import { pageOptions, pagination } from '../../../configs';

const content = (props) => {
  const {
    keyword,
    dataSource,
    pageSize,
    setPageSize,
    currentPage,
    setCurrentPage,
    totalData,
  } = props;

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
            title="Users list is empty"
            desc="You don't have a list of users"
          />
        );
      }}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="uuid"
        pagination={pagination(pageSize)}
      />
      <Pagination
        total={totalData}
        pageSize={pageSize}
        setPageSize={setPageSize}
        current={currentPage + 1}
        options={pageOptions}
        onChange={onChangePageSize}
        setCurrentPage={setCurrentPage}
      />
    </ConfigProvider>
  );
};

export default content;
