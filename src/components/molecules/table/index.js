import styled from 'styled-components';
import { Table as TableAntd } from 'antd';
// import boxShadow from '../../configs/boxShadow';
import { colors } from '../../../configs';

const Table = styled(TableAntd)`
  margin: 24px 0;
  .ant-table {
    padding: 0;
    border-radius: 12px;
    background-color: ${colors.white};
    color: ${colors.dark1};
    box-shadow: none;
    min-height: ${(props) => {
      return props.minHeight ? props.minHeight : '560px';
    }};
  }

  .ant-table-thead > tr > th {
    background-color: ${colors.white};
    color: ${colors.dark2};
    border-bottom: ${(props) => {
      return !props.borderLess && 'unset';
    }};
    padding: 0 10px;
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: unset;
  }
  .ant-table-column-sorters {
    padding: 0;
  }

  /* ROW HOVER */
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${colors.blue4};
  }

  /* thead sort hover */
  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background-color: ${colors.white};
  }

  /* COLUMN SORTED */
  .ant-table-thead th.ant-table-column-sort {
    background-color: ${colors.white};
  }
  .inactive {
    td.ant-table-column-sort {
      background-color: ${colors.light3};
    }
  }
  td.ant-table-column-sort {
    background-color: ${colors.white};
  }

  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    color: ${colors.mainColor};
  }

  .anticon {
    color: ${colors.light0};
  }
  .anticon-filter {
    /* color: unset; */
  }

  .ant-table-tbody > tr > td {
    padding: 16px 12px;
  }
  .ant-table-tbody > tr.noPadding > td {
    padding: 0;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0px;
  }

  .ant-table-column-sorters {
    justify-content: unset;

    .ant-table-column-title {
      flex: unset;
      margin-right: 10px;
      margin-top: 5px;
    }
  }

  .ant-table-tbody > tr.ant-table-row.inactive:hover > td {
    background-color: ${colors.light2};
  }
  .inactive,
  .disabled-row {
    background-color: ${colors.light3} !important;
    :hover {
      background-color: ${colors.light2} !important;
    }
  }
  .ant-table-tbody > tr.ant-table-row.disabled-row:hover > td {
    background-color: ${colors.black6};
  }

  tr.ant-table-expanded-row > td,
  tr.ant-table-expanded-row:hover > td {
    background-color: ${colors.grey4};
  }
  /* 
  .ant-table-content {
  } */

  .ant-table-filter-column {
    justify-content: flex-start;
    .ant-table-column-title {
      flex: unset;
    }
  }

  .component_table_row_selectable {
    cursor: pointer;
    &.checked {
      background-color: ${colors.grey2};
    }
    .ant-radio-inner {
      height: 24px !important;
      width: 24px !important;
    }
    .anticon {
      color: ${colors.green1};
      font-size: 20px;
    }
  }

  .pointer {
    cursor: pointer;
  }
`;

export default Table;
