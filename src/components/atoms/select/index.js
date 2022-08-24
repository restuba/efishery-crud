import styled from 'styled-components';
import { Select as SelectLib } from 'antd';
import { colors } from '../../../configs';

const Select = styled(SelectLib)`
  font-size: 14px;
  .ant-select-selector {
    border-color: ${colors.light2} !important;
    border-radius: 12px !important;
    background-color: ${colors.light2} !important;
  }

  .ant-select-selection-overflow-item {
    .ant-select-selection-item {
      line-height: unset;
      align-items: center;
    }
  }
`;

export default Select;
