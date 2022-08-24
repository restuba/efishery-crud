import { ConfigProvider } from 'antd';
import React from 'react';
import { EmptyResult, Table } from '../../molecules';

const content = (props) => {
  const { keyword, userList } = props;
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
      <Table dataSource={userList} rowKey="id" />
    </ConfigProvider>
  );
};

export default content;
