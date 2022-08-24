import { useForm } from 'antd/lib/form/Form';
import React, { useEffect } from 'react';
import { commonMessage } from '../../../configs';
import { Input, Select } from '../../atoms';
import { Form, Modal } from '../../molecules';

const sizeList = [
  {
    value: '1',
    label: 'Size 1',
  },
  {
    value: '2',
    label: 'Size 2',
  },
];

const EditCommodity = (props) => {
  const [form] = useForm();
  const { isShow, onClose, selectedCommodity } = props;

  useEffect(() => {
    form.setFieldsValue({
      name: selectedCommodity?.komoditas,
      province_area: selectedCommodity?.area_provinsi,
      city_area: selectedCommodity?.area_kota,
      price: selectedCommodity?.price,
      size: selectedCommodity?.size,
    });
  }, [selectedCommodity, form]);

  const onSubmit = () => {};

  const onCloseHandler = () => {
    form.resetFields();
    onClose();
  };
  return (
    <Modal
      isShow={isShow}
      title="Edit Commodity"
      okText="Update"
      onCancel={onCloseHandler}
      width={820}
      okForm="edit-commodity"
    >
      <Form
        form={form}
        layout="vertical"
        id="edit-commodity"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: commonMessage.required('commodity'),
            },
          ]}
        >
          <Input placeholder="Commodity name" />
        </Form.Item>
        <Form.Item
          label="Province Area"
          name="province_area"
          rules={[
            {
              required: true,
              message: commonMessage.required('province area'),
            },
          ]}
        >
          <Select options={sizeList} placeholder="Province area" />
        </Form.Item>
        <Form.Item
          label="City Area"
          name="city_area"
          rules={[
            {
              required: true,
              message: commonMessage.required('city area'),
            },
          ]}
        >
          <Select options={sizeList} placeholder="City area" />
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: commonMessage.required('price'),
            },
          ]}
        >
          <Input type="number" placeholder="Price" />
        </Form.Item>
        <Form.Item
          label="Size"
          name="size"
          rules={[
            {
              required: true,
              message: commonMessage.required('size'),
            },
          ]}
        >
          <Select placeholder="Size" options={sizeList} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditCommodity;
