import React from 'react';
import Wrapper, { Pagination, Select } from './style';

const Index = (props) => {
  const {
    total,
    options = [8],
    pageSize,
    setPageSize,
    current,
    onChange,
    setCurrentPage,
    style,
  } = props;

  return (
    <Wrapper style={style}>
      {total > pageSize && (
        <div>
          <Pagination
            defaultCurrent={1}
            current={current ?? 1}
            total={total}
            pageSize={pageSize}
            onChange={onChange}
            showSizeChanger={false}
          />
        </div>
      )}
      <div>
        <Select
          defaultValue={options[0]}
          onChange={(value) => {
            setPageSize(value);
            if (setCurrentPage) {
              setCurrentPage(0);
            }
          }}
        >
          {options.map((opt) => {
            return (
              <Select.Option value={opt} key={opt}>
                {`${opt} / pages`}
              </Select.Option>
            );
          })}
        </Select>
      </div>
    </Wrapper>
  );
};

export default Index;
