import { message } from 'antd';
import React, { useState } from 'react';
import { commonMessage } from '../../../configs';
import { commodityService } from '../../../services';
import { Modal } from '../../molecules';

const DeleteCommodity = (props) => {
  const { isShow, onClose, selectedCommodity, setIsRefetch } = props;
  const [isLoading, setIsLoading] = useState(false);

  const onCloseHandler = () => {
    onClose();
  };

  const onSubmit = () => {
    setIsLoading(true);
    commodityService
      .deleteCommodity(selectedCommodity?.uuid)
      .then(() => {
        message.success(commonMessage.successDelete('commodity'));
        onCloseHandler();
        setIsRefetch((prev) => {
          return !prev;
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      isLoadingButton={isLoading}
    >
      Are you sure you want to delete&nbsp;
      <strong>{selectedCommodity?.komoditas}</strong>
      <span>?</span>
    </Modal>
  );
};

export default DeleteCommodity;
