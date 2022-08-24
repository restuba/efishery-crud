import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  position: relative;
  .component_action_menu {
    cursor: pointer;
    border-radius: 12px;
    padding: 2px 8px;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.dark0};
    svg {
      fill: ${colors.dark0};
    }
  }
  .component_action_menu_items {
    min-width: ${(props) => {
      return props.minWidth ? `${props.minWidth}px` : '177px';
    }};
  }
  .component_action_menu_items {
    position: absolute;
    padding: 8px 0;
    border: 1px solid ${colors.light0};
    box-shadow: 0px 2px 16px -4px rgba(23, 30, 41, 0.08);
    border-radius: 8px;
    background-color: white;
    right: 0;
    z-index: 10;
  }
`;

export default Wrapper;

export const MenuItem = styled.div`
  padding: 12px 18px;
  display: flex;
  align-items: center;
  color: ${colors.dark1};
  font-size: 16px;
  cursor: pointer;
  svg {
    color: ${colors.dark2};
  }
  border-bottom: 1px solid ${colors.light0};
  &:hover {
    background-color: ${colors.light3};
  }
  &.danger {
    color: ${colors.red0};
    svg {
      color: ${colors.red0};
    }
  }

  &.last {
    border-bottom: unset;
  }

  .component_action_menu_icon {
    margin-right: 12px;
  }
`;
