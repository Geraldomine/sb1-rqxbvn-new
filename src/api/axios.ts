import axios from 'axios';
import type { ApiError } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const apiError = error.response.data as ApiError;
      
      if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      throw new Error(apiError.message || 'An error occurred');
    } else if (error.request) {
      throw new Error('Could not connect to the server. Please check your connection.');
    } else {
      throw new Error('An error occurred. Please try again.');
    }
  }
);

export default instance;