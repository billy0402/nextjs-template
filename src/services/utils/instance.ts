import axios from 'axios';

import { BASE_API_URL } from '@/fixtures/constants';

const instance = axios.create({
  baseURL: BASE_API_URL,
});

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default instance;
