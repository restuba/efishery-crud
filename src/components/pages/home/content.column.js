import { ActionMenus } from '../../molecules';
import actions from './content.action';

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
            minWidth={200}
          />
        );
      },
    },
  ];
};

export default columns;
