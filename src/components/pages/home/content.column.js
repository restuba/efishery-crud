import { EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { ActionMenus } from '../../molecules';

const actions = (props) => {
  const { record, onShowEditCommodity, setSelectedCommodity } = props;
  return [
    {
      id: 1,
      text: 'Edit Commodity',
      icon: <EditOutlined />,
      onClick: () => {
        onShowEditCommodity();
        setSelectedCommodity(record);
      },
    },
    {
      id: 2,
      text: 'Delete Commodity',
      icon: <MinusCircleOutlined />,
      type: 'danger',
    },
  ];
};

const columns = (props) => {
  const { onShowEditCommodity, setSelectedCommodity } = props;
  return [
    {
      title: 'Komoditas',
      dataIndex: 'komoditas',
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Area Provinsi',
      dataIndex: 'area_provinsi',
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Area Kota',
      dataIndex: 'area_kota',
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Size',
      dataIndex: 'size',
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      render: (record) => {
        return record || '-';
      },
    },
    {
      key: '',
      render: (record) => {
        if (!record?.uuid) return null;
        return (
          <ActionMenus
            items={actions({
              record,
              onShowEditCommodity,
              setSelectedCommodity,
            })}
          />
        );
      },
    },
  ];
};

export default columns;
