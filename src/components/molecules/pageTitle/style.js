import styled from 'styled-components';
import { breakpoints } from '../../../configs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  .components_page_title_main {
    max-width: 800px;
  }
  .components_page_title_additional {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
    button {
      min-width: unset;
      flex: 1;
    }
  }

  @media screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
    .components_page_title_additional {
      button {
        min-width: 120px;
      }
    }
  }
`;

export default Wrapper;
