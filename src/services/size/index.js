import BaseService from '../baseServices';

const getListSize = () => {
  return BaseService.get('/option_size');
};

export default {
  getListSize,
};
