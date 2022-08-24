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
    margin-bottom: 8px;
    .ant-form-item-label {
      padding: 0 0 12px;
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

  #basic_password {
    border-radius: 0px;
  }

  .ant-form-item-label > label {
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.dark2};
  }

  .ant-picker-input > input {
    font-size: 1rem;
  }
  .ant-picker {
    width: 100%;
    height: 40px;
    border-radius: 12px;
    border: 1px solid ${colors.grey1};
  }
  .ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    color: ${colors.dark1};
  }

  .component_form_control_budget {
    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
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
  .with_border {
    .ant-checkbox-wrapper {
      height: 40px !important;
      border-radius: 12px !important;
      border: 1px solid ${colors.grey1} !important;
      font-size: 1rem;

      padding: 0 12px;
      line-height: 40px;
    }
  }

  &.checkbox-orange {
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${colors.orange1};
      border-color: ${colors.orange1};
    }
    .ant-checkbox-indeterminate .ant-checkbox-inner::after {
      background-color: ${colors.orange1};
    }
  }

  .phone-number {
    .ant-input-affix-wrapper {
      border-radius: 12px;
      padding: 0px;
      overflow: hidden;

      .ant-input-prefix {
        background: ${colors.grey2};
        padding: 0 10px;
        margin-right: 0px;
      }

      .ant-input {
        border-top: none !important;
        border-right: none !important;
        border-bottom: none !important;
        border-radius: 0px;
        border-left: 1px solid ${colors.grey1};
        padding-left: 10px;
      }
    }
  }

  .alert-nowrap {
    .ant-form-item-extra {
      white-space: nowrap;
    }
  }

  &.form_item_without_margin {
    .ant-form-item {
      margin-bottom: 0;
    }
  }

  /* .ant-form-item-explain.ant-form-item-explain-success {
    .alert {
      color: #ff4d4f;
    }
  } */
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
