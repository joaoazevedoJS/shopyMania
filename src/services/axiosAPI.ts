import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://backend-shopymania.herokuapp.com'
    : 'http://localhost:3333';

const axiosAPI = axios.create({
  baseURL,
});

export default axiosAPI;
