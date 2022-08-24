import styled from 'styled-components';
import { breakpoints } from '../../../configs';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: auto;
  .component_page_template_children {
    padding: 24px 24px 40px 24px;
  }

  @media screen and (min-width: ${breakpoints.md}) {
    .component_page_template_children {
      padding: 40px 40px 60px 40px;
    }
  }
`;

export default Wrapper;
