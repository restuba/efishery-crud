import { filterEmptyObject, isObjectEmpty } from '../../utils';
import BaseService from '../baseServices';

const getListCommodity = (params = {}) => {
  const query = {
    offset: params?.offset || 0,
    limit: params?.limit,
    search: {
      komoditas: params?.keyword,
      area_provinsi: params?.province,
      area_kota: params?.city,
    },
  };

  query.search = filterEmptyObject(query.search);
  if (isObjectEmpty(query.search)) delete query.search;

  return BaseService.get('/list', { params: query });
};

const createCommodity = (body) => {
  return BaseService.post('/list', [body]);
};

const updateCommodity = ({ newValue, oldValue }) => {
  return BaseService.put('/list', { condition: oldValue, set: newValue });
};

export default {
  getListCommodity,
  createCommodity,
  updateCommodity,
};
