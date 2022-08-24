import { EditOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { ActionMenus } from '../../molecules';

const actions = (props) => {
  const {
    record,
    onShowEditCommodity,
    onShowDeleteModal,
    setSelectedCommodity,
  } = props;
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
      onClick: () => {
        onShowDeleteModal();
        setSelectedCommodity(record);
      },
    },
  ];
};

const columns = (props) => {
  const { onShowEditCommodity, onShowDeleteModal, setSelectedCommodity } =
    props;
  return [
    {
      title: 'Komoditas',
      dataIndex: 'komoditas',
      sorter: (a, b) => {
        return a?.komoditas.localeCompare(b?.komoditas);
      },
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Area Provinsi',
      dataIndex: 'area_provinsi',
      sorter: (a, b) => {
        return a?.area_provinsi.localeCompare(b?.area_provinsi);
      },
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Area Kota',
      dataIndex: 'area_kota',
      sorter: (a, b) => {
        return a?.area_kota.localeCompare(b?.area_kota);
      },
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Size',
      dataIndex: 'size',
      sorter: (a, b) => {
        return a.size - b.size;
      },
      render: (record) => {
        return record || '-';
      },
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => {
        return a.price - b.price;
      },
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
              onShowDeleteModal,
              setSelectedCommodity,
            })}
          />
        );
      },
    },
  ];
};

export default columns;
