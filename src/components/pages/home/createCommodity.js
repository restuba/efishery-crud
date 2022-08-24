import { useForm } from 'antd/lib/form/Form';
import React from 'react';
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

const CreateCommodity = (props) => {
  const [form] = useForm();
  const { isShow, onClose } = props;

  const onSubmit = () => {};

  const onCloseHandler = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      isShow={isShow}
      title="Create Commodity"
      okText="Create"
      onCancel={onCloseHandler}
      width={820}
      okForm="create-commodity"
    >
      <Form
        form={form}
        layout="vertical"
        id="create-commodity"
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

export default CreateCommodity;
