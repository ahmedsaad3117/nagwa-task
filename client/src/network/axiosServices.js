import axios from 'axios';

const axiosServices = axios.create({
  baseURL: 'http://localhost:3001',
});

export default axiosServices;
