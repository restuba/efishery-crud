import React from 'react';
import { Modal } from '../../molecules';

const DeleteCommodity = (props) => {
  const { isShow, onClose, selectedCommodity } = props;

  const onSubmit = () => {};

  const onCloseHandler = () => {
    onClose();
  };

  return (
    <Modal
      isShow={isShow}
      title="Delete Commodity"
      okText="Delete"
      onCancel={onCloseHandler}
      onOk={onSubmit}
      width={420}
      okForm="delete-commodity"
      type="danger"
    >
      Are you sure you want to delete&nbsp;
      <strong>{selectedCommodity?.komoditas}</strong>
      <span>?</span>
    </Modal>
  );
};

export default DeleteCommodity;
