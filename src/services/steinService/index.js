import SteinLib from 'stein-js-client';

const baseUrl = `${process.env.REACT_APP_REST_URL}/${process.env.REACT_APP_REST_KEY}`;
const steinStore = new SteinLib(baseUrl);

export default steinStore;
