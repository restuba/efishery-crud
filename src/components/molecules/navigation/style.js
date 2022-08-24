import { Menu } from 'antd';
import styled from 'styled-components';
import { colors } from '../../../configs';

const Navigation = styled(Menu)`
  margin: auto;
  color: ${colors.dark2} !important;
  width: 100%;
  padding: 0px 16px;

  .ant-menu-item {
    padding: 0px 16px !important;
  }
  .ant-menu-item .ant-menu-item-selected {
    :active ::after,
    ::selection {
      color: ${colors.dark1} !important;
    }
  }
`;

export default Navigation;
