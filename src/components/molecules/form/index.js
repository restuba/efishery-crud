import styled from 'styled-components';
import { Form as FormLib } from 'antd';
import { colors } from '../../../configs';

const Form = styled(FormLib)`
  .ant-form-item-control-input-content .ant-input,
  .ant-input-affix-wrapper.ant-input-password,
  textarea,
  .ant-picker,
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${colors.light2} !important;
    background-color: ${colors.light2};
    border-radius: 12px;
    :hover,
    :active,
    :focus {
      outline: 0;
    }
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    margin-top: 1px;
  }

  .ant-input:not(textarea) {
    font-size: 1rem;
    height: 40px;
  }

  .ant-input-password .ant-input {
    height: 40px;
  }

  .ant-form-item-control-input-content .ant-input {
    padding: 12px;
  }

  .ant-input-affix-wrapper.ant-input-password {
    padding: 8px;
    padding-right: 8px;
  }

  .ant-form-item-control-input-content textarea.ant-input {
    padding: 12px 16px !important;
  }

  .ant-form-item {
    margin-bottom: 24px;
    .ant-form-item-label {
      padding: 0 0 8px;
      > label {
        color: ${colors.dark2};
        font-weight: 500;
        font-size: 1rem;
        line-height: 142%;
      }
      .anticon svg {
        fill: ${colors.mainColor};
      }
    }
  }

  textarea.ant-input {
    padding: 12px 16px;
  }

  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 40px;
  }

  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 40px;
  }

  .ant-input-affix-wrapper.ant-input-password .ant-input {
    border: none !important;
  }

  textarea {
    padding: 12px 16px;
  }

  .ant-select-selector {
    border-radius: 12px !important;
  }

  .ant-tree-select .ant-select-selector {
    min-height: 40px;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
    border-color: ${colors.light2};
  }

  .ant-form-item-label > label {
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.dark2};
  }

  .ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    color: ${colors.dark1};
  }

  .ant-form-item-control {
    .ant-checkbox-group {
      &.vertical {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
    }
  }

  .alert-nowrap {
    .ant-form-item-extra {
      white-space: nowrap;
    }
  }

  .ant-form-item-explain {
    color: #ff4d4f;
  }

  .hide_input_spinners {
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  .addon_transparent {
    .ant-input-group-addon {
      border: none;
      background-color: transparent;
    }
  }

  /* Input error color text */
  .ant-form-item-explain-error {
    color: ${colors.orange1};
    border-color: ${colors.orange1};
  }
  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    border-color: ${colors.orange1};
  }
  .ant-form-item-has-error
    .ant-select:not(.ant-select-disabled):not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${colors.orange1} !important;
  }

  .ant-input-affix-wrapper {
    background: ${colors.light2};
    padding: 8px 16px;
    border: none;
    border-radius: 12px;

    .ant-input {
      height: unset;
      padding-top: 1px;
      padding-bottom: 1px;
      border-radius: unset;
    }

    .ant-input-prefix {
      color: ${colors.dark4};
    }
  }

  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper,
  .ant-form-item-has-error
    :not(.ant-input-disabled):not(.ant-input-borderless).ant-input:hover,
  .ant-form-item-has-error
    :not(.ant-input-affix-wrapper-disabled):not(.ant-input-affix-wrapper-borderless).ant-input-affix-wrapper:hover {
    background-color: ${colors.light2};
  }
`;

export default Form;
