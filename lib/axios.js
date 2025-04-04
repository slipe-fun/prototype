import axios from 'axios';
import { store } from '../hooks/contexts/session';

const jsonConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

const mediaConfig = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  timeout: 30000,
};

const v1Instance = axios.create({
  ...jsonConfig,
  baseURL: 'https://api.slipe.fun/v1',
});

const v2Instance = axios.create({
  ...jsonConfig,
  baseURL: 'https://api.slipe.fun/v2',
});

const mediaInstance = axios.create({
  ...mediaConfig,
  baseURL: 'https://api.slipe.fun/v1',
});

const requestInterceptor = async (config) => {
  const token = await store.get("token");
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

const responseInterceptor = (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        break;
      case 500:
        break;
      default:
        break;
    }
  }
  return Promise.reject(error);
};

[v1Instance, v2Instance, mediaInstance].forEach(instance => {
  instance.interceptors.request.use(requestInterceptor);
  instance.interceptors.response.use(response => response, responseInterceptor);
});

export const api = {
  v1: v1Instance,
  v2: v2Instance,
  media: mediaInstance,
};