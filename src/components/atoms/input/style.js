import styled from 'styled-components';
import { Input as InputLib } from 'antd';
import { colors } from '../../../configs';

const Input = styled(InputLib)`
  border-radius: 12px;
  background-color: ${colors.light2};
  border: none;
  height: 40px;
  .ant-input-prefix {
    margin-right: 8px;
    .remixicon-icon {
      width: 17px;
      height: 17px;
    }
  }
  .ant-input {
    background-color: ${colors.light2};
    height: unset !important;
  }
`;

export default Input;
