import { EditOutlined, MinusCircleOutlined } from '@ant-design/icons';

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

export default actions;
