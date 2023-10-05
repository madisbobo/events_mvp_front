import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
});

// Set the default headers without the token
apiClient.defaults.headers.common['Content-Type'] = 'application/json';

// Intercept requests before they are sent
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the JWT token from local storage
    const token = localStorage.getItem('jwtToken');

    // If the token exists, set it in the request headers
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
