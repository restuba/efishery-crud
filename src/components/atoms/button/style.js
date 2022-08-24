import styled, { css } from 'styled-components';
import { Button as ButtonLib } from 'antd';
import { colors } from '../../../configs';

const Button = styled(ButtonLib)`
  border-radius: 12px;
  padding: 0 16px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 500;
  text-shadow: none;
  min-width: ${({ min_width: minWidth }) => {
    return minWidth ? `${minWidth}px` : 'initial';
  }};

  ${(props) => {
    return (
      (props.type === 'primary' || props.type === 'default') &&
      css`
        background-color: ${colors.primary};
        border-color: ${colors.primary};
        color: ${colors.white};
        box-shadow: ${colors.primary};
        :hover,
        :focus,
        :active {
          background-color: ${colors.primary};
          border-color: ${colors.primary};
        }
      `
    );
  }}
`;

export default Button;
