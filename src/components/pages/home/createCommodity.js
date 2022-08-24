import { message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import { commonMessage } from '../../../configs';
import { commodityService } from '../../../services';
import { Input, Select } from '../../atoms';
import { Form, Modal } from '../../molecules';

const CreateCommodity = (props) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const { isShow, onClose, cityList, provinceList, sizeList, setIsRefetch } =
    props;

  const onCloseHandler = () => {
    form.resetFields();
    onClose();
  };

  const onSubmit = (values) => {
    const body = {
      komoditas: values?.name?.trim(),
      area_provinsi: values?.province_area,
      area_kota: values?.city_area,
      price: values?.price?.toString(),
      size: values?.size,
    };
    setIsLoading(true);
    commodityService
      .createCommodity(body)
      .then(() => {
        message.success(commonMessage.successCreate('commodity'));
        onCloseHandler();
        setIsRefetch((prev) => {
          return !prev;
        });
      })
      .catch(() => {
        message.error(commonMessage.failedCreate('commodity'));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const optionCity = cityList?.filter((item) => {
    if (!selectedProvince) return item;
    return item?.province === selectedProvince;
  });

  return (
    <Modal
      isShow={isShow}
      title="Create Commodity"
      okText="Create"
      onCancel={onCloseHandler}
      width={820}
      okForm="create-commodity"
      isLoadingButton={isLoading}
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
          <Select
            options={provinceList}
            onChange={(value) => {
              setSelectedProvince(value);
              form.setFieldsValue({ city_area: null });
            }}
            placeholder="Province area"
          />
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
          <Select options={optionCity} placeholder="City area" />
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
