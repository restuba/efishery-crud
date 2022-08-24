import styled from 'styled-components';
import { colors } from '../../../configs';

const Wrapper = styled.div`
  display: ${({ isShow }) => {
    return isShow ? 'block' : 'none';
  }};

  .container_modal_wrapper {
    margin: auto;
    display: block;
    width: 100%;
    height: 100%;
    z-index: ${({ zIndex }) => {
      return zIndex || 110;
    }};
    background-color: ${({ backgroundColor }) => {
      return backgroundColor || 'rgba(17, 29, 52, 0.33)';
    }};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
      width: 0;
    }
    box-shadow: 0px 2px 16px -4px rgba(23, 30, 41, 0.08);

    .container_modal_content {
      max-width: ${({ width }) => {
        return width ? `${width}px` : '400px';
      }};
      background-color: white;
      margin: auto;
      margin-top: ${({ marginTop }) => {
        return marginTop ? `${marginTop}px` : '180px';
      }};
      margin-bottom: 84px;
      border-radius: 12px;
      /* z-index: 101; */
    }
    .component_header {
      display: flex;
      justify-content: space-between;
      padding: 27px 24px;
      padding-bottom: 19px;
      align-items: center;
      .component_header_title {
        display: flex;
        flex-direction: column;
        row-gap: 4px;
      }
      .component_header_close {
        cursor: pointer;
        fill: ${colors.dark1};
      }
    }
    .component_body {
      padding: 0 24px;
      border-bottom: ${({ bodyBorderBottom }) => {
        return bodyBorderBottom ? `1px solid ${colors.light0}` : 'none';
      }};
    }
    .component_footer {
      display: flex;
      justify-content: flex-end;
      padding: 24px;
      border-radius: 12px;

      button {
        box-shadow: none;
        min-width: 100px;
      }
      button:last-child {
        margin-left: 8px;
      }
    }
  }
`;

export default Wrapper;
