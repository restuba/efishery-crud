import BaseService from '../baseServices';

const getListArea = () => {
  return BaseService.get('/option_area');
};

export default {
  getListArea,
};
