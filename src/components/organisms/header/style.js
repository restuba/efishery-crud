import styled from 'styled-components';
import { breakpoints, colors } from '../../../configs';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.light0};
  z-index: 100;
  .component_header {
    max-width: 1280px;
    margin: auto;
  }
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

  @media screen and (min-width: ${breakpoints.md}) {
    padding: 16px 40px;
  }
`;
