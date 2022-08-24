import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.light4};
  border-bottom: 2px solid ${colors.light0};
  z-index: 100;
`;

export default Wrapper;

export const MainHeader = styled.div`
  margin: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .component_logo {
    height: 26px;
  }
`;
