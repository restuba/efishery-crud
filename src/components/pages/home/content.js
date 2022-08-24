import React from 'react';
import { ConfigProvider } from 'antd';
import { EmptyResult, Table } from '../../molecules';
import columns from './content.column';

const content = (props) => {
  const { keyword, dataSource } = props;
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
      <Table dataSource={dataSource} columns={columns} rowKey="uuid" />
    </ConfigProvider>
  );
};

export default content;
