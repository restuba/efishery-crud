import styled from 'styled-components';
import { Button as ButtonLib } from 'antd';

const Button = styled(ButtonLib)`
  border-radius: 12px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  font-size: 14px;
  font-weight: 500;
  text-shadow: none;
  min-width: ${({ min_width: minWidth }) => {
    return minWidth ? `${minWidth}px` : 'initial';
  }};
`;

export default Button;
