import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
});

apiClient.defaults.headers.common['Content-Type'] = 'application/json';

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
