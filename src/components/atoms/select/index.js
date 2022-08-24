import styled from 'styled-components';
import { Select as SelectLib } from 'antd';
import { colors } from '../../../configs';

const Select = styled(SelectLib)`
  display: block;
  .ant-select-selector {
    height: 40px !important;
    border-color: ${colors.light2} !important;
    border-radius: 12px !important;
    background-color: ${colors.light2} !important;
    .ant-select-selection-search-input {
      height: 40px !important;
    }
    .ant-select-selection-placeholder,
    .ant-select-selection-item {
      display: flex;
      align-items: center;
    }
  }

  .ant-select-selection-overflow-item {
    .ant-select-selection-item {
      line-height: unset;
      align-items: center;
    }
  }
`;

export default Select;
