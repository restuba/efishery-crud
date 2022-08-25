import { filterEmptyObject, isObjectEmpty } from '../../utils';
import { SteinService } from '..';

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

  return SteinService.read('list', query);
};

const createCommodity = (body) => {
  return SteinService.append('list', [body]);
};

const updateCommodity = ({ body, uuid }) => {
  return SteinService.edit('list', { search: { uuid }, set: body });
};

const deleteCommodity = (uuid) => {
  return SteinService.delete('list', { search: { uuid } });
};

export default {
  getListCommodity,
  createCommodity,
  updateCommodity,
  deleteCommodity,
};
