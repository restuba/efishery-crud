import BaseService from '../baseServices';

const getListCommodity = (params = {}) => {
  const query = {
    offset: params?.offset || 0,
    limit: params?.limit,
    search: {
      komoditas: params?.keyword,
    },
  };

  if (!Object.prototype.hasOwnProperty.call(params, 'keyword')) {
    delete query.search;
  }
  if (Object.prototype.hasOwnProperty.call(params, 'keyword')) {
    if (params.keyword === '' || params.keyword === null) {
      delete query.search;
    }
  }
  return BaseService.get('/list', { params: query });
};

const createCommodity = (body) => {
  return BaseService.post('/list', body);
};

export default {
  getListCommodity,
  createCommodity,
};
