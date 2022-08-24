import styled from 'styled-components';
import { Pagination as PaginationLib, Select as SelectLib } from 'antd';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: white;
  padding: 8px 0;
  border-radius: 12px;
  box-shadow: none;
  margin-bottom: 24px;
`;

export const Select = styled(SelectLib)`
  margin: 0;
  margin-left: 20px;
  color: ${colors.dark1};
  .ant-select-selector {
    border: none !important;
    border-radius: 10px !important;
    background-color: ${colors.light3} !important;
  }
`;

export const Pagination = styled(PaginationLib)`
  .ant-pagination-item {
    border: none;
    border-radius: 10px;
    font-weight: 400;
    background-color: ${colors.light3} !important;
    a {
      color: ${colors.dark1};
    }
  }
  .ant-pagination-item:focus-visible a,
  .ant-pagination-item:hover a {
    color: ${colors.primary};
  }
  .ant-pagination-item-active {
    border-radius: 10px;
    background-color: ${colors.primary};
    color: ${colors.white};
  }
  .ant-pagination-item-active a {
    color: ${colors.white} !important;
    border-radius: 10px;
    background-color: ${colors.primary};
    font-weight: 400;
    :hover {
      color: ${colors.white};
    }
  }

  .ant-pagination-item:focus-visible,
  .ant-pagination-item:hover {
    color: ${colors.primary};
  }

  .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 10px;
    border: none;
    background-color: ${colors.light3};
    font-weight: 600;
  }
`;

export default Wrapper;
