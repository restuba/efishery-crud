import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${colors.light3};
  .component_loading_root {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default Wrapper;
